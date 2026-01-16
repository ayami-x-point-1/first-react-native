---
name: fix-review
description: PRのレビューを読み取って修正が必要かどうかを判断し、必要な修正を実行します。
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - mcp__ide__getDiagnostics
  - AskUserQuestion
---

# PRレビュー対応スキル

このスキルはPRのレビューコメントを読み取り、修正プランを作成し、ユーザー承認を得てから修正を実行します。

## 引数

引数は以下のように解釈します：
- 引数なし: 現在のブランチのPRを参照
- 第1引数: 指定されたブランチのPRを参照

## 実行手順

### Phase 1: PRレビュー取得

#### 1.1 ブランチの特定

引数がない場合は現在のブランチを取得します：
```bash
git branch --show-current
```

#### 1.2 PR情報の取得

以下のコマンドでPR情報を取得します：

```bash
# 現在のブランチのPR情報
gh pr view --json number,title,url,reviewDecision,reviews

# 特定ブランチのPR情報
gh pr view [branch] --json number,title,url,reviewDecision,reviews
```

このコマンドはPR番号、タイトル、URL、レビュー決定、レビュー一覧を取得します。

#### 1.3 レビューコメントの詳細取得

PR番号を使ってレビューコメントを取得します：

```bash
# コード行へのレビューコメント
gh api repos/{owner}/{repo}/pulls/{pr_number}/comments

# レビュースレッド
gh api repos/{owner}/{repo}/pulls/{pr_number}/reviews
```

リポジトリ情報は以下のコマンドで取得します：
```bash
gh repo view --json owner,name
```

### Phase 2: プランファイル作成

#### 2.1 レビュー内容の分析

取得したレビューコメントを分析し、以下を判断します：
- 修正が必要かどうか
- 修正する場合の具体的な内容
- 修正しない場合の理由

#### 2.2 プランファイルの作成

`.claude/plans/pr-{PR番号}-review-plan.md` を作成し、以下の形式で記述します：

```markdown
# PR #{番号} レビュー対応プラン

## PR情報
- タイトル: {PR タイトル}
- URL: {PR URL}
- レビュー状態: {reviewDecision}

## レビュー対応一覧

### レビュー{連番}: @{レビュアー} - {ファイルパス}:{行番号}
**コメント**: "{レビューコメント内容}"
**対応**: ✅ 修正する / ❌ 修正しない
**理由**: {修正する理由 または 修正しない理由}
**修正内容**: {修正する場合の具体的な内容}

（レビューごとに繰り返す）
```

### Phase 3: プラン全体の確認

#### 3.1 ユーザーへの確認

`AskUserQuestion`ツールを使用してプランをユーザーに確認してもらいます。選択肢：
- 承認して修正を開始
- プランを修正
- キャンセル

### Phase 4: レビューごとの修正実行

**各レビューに対して以下を繰り返します：**

#### 4.1 修正の実行

プランに従って該当ファイルを修正します：
- `Read`ツールでファイルを読み取り
- `Edit`ツールで修正を適用
- 必要に応じて`Glob`や`Grep`で関連箇所を検索

#### 4.2 診断エラーのチェック

修正後、`mcp__ide__getDiagnostics`ツールで以下をチェックします：
- eslintエラー
- TypeScriptの型エラー
- その他のコンパイルエラー

エラーがある場合は修正します。

#### 4.3 ユーザー確認

`AskUserQuestion`ツールで修正内容をユーザーに確認します：
- このまま承認してコミット
- 手動で修正を加える（一時停止）
- スキップして次のレビューへ

#### 4.4 コミット

承認された場合、以下の手順でコミットします：

1. 修正ファイルをステージング：
```bash
git add {修正ファイル}
```

2. Run /create-commit-message @{レビュアー} to generate a review fix commit message.

3. 生成されたコミットメッセージでコミット実行：
```bash
git commit -m "$(cat <<'EOF'
[生成されたコミットメッセージ]
EOF
)"
```

### Phase 5: 完了

#### 5.1 全修正完了の報告

修正したレビュー数と概要を報告します。

#### 5.2 プッシュの確認

`AskUserQuestion`ツールでプッシュするか確認します：
- プッシュする
- プッシュしない

プッシュする場合：
```bash
git push
```

#### 5.3 レビューコメントへの返信

各レビューコメントに対応内容を返信します。

**修正したレビューの場合：**
```bash
gh api repos/{owner}/{repo}/pulls/{pr_number}/comments \
  -f body="修正しました。

{修正内容の説明}

修正コミット: {commit_hash}" \
  -f commit_id="{original_commit_id}" \
  -f path="{file_path}" \
  -F line={line_number} \
  -F in_reply_to={comment_id}
```

**修正しなかったレビューの場合：**
```bash
gh api repos/{owner}/{repo}/pulls/{pr_number}/comments \
  -f body="{修正しなかった理由の説明}" \
  -f commit_id="{original_commit_id}" \
  -f path="{file_path}" \
  -F line={line_number} \
  -F in_reply_to={comment_id}
```

返信内容のポイント：
- 修正した場合は、何をどのように修正したかを具体的に説明
- 修正しなかった場合は、その理由を明確に説明（技術的根拠を含める）
- 参考URLがある場合は含める
- コミットハッシュを記載

#### 5.4 全レビュー対応完了の確認

`AskUserQuestion`ツールで全レビュー対応が完了したか確認します：
- 全て完了した → プランファイルを削除
- まだ対応が残っている → プランファイルを保持して終了
- 後で再開する → プランファイルを保持して終了

#### 5.5 プランファイルの削除

全レビュー対応が完了した場合のみ削除します：
```bash
rm .claude/plans/pr-{PR番号}-review-plan.md
```

## 注意事項

- `gh` CLIがインストールされており、認証済みである必要があります
- PRが存在しない場合はエラーになります
- 各レビューへの対応理由は必ず明記してください
- 診断エラーが解消されるまで次のレビューに進まないでください
- ユーザーの承認なしで修正を実行しないでください
- コミットメッセージは必ず日本語で記述してください
