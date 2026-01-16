---
name: create-pr
description: GitHub PRを作成します。compareブランチとbaseブランチを指定してタイトルとディスクリプションを自動生成します。
allowed-tools:
  - Bash
  - Read
  - AskUserQuestion
---

# GitHub PR作成スキル

このスキルはGitHub PRを作成し、タイトルとディスクリプションを自動生成します。

## 引数

引数は以下のように解釈します：

- 第1引数: compareブランチ（指定なしの場合は現在のブランチ）
- 第2引数: baseブランチ（指定なしの場合は`main`）

## 実行手順

### 1. ブランチ情報の取得

#### 1.1 現在のブランチを取得

```bash
git branch --show-current
```

#### 1.2 compareブランチの決定

- 引数が指定されている場合: 第1引数を使用
- 指定されていない場合: 現在のブランチを使用

#### 1.3 baseブランチの決定

- 引数が指定されている場合: 第2引数を使用
- 指定されていない場合: `main`を使用

### 2. リモートブランチの確認とプッシュ

#### 2.1 リモートブランチの存在確認

```bash
git ls-remote --heads origin {compare}
```

#### 2.2 ローカルとリモートの差分確認

```bash
git status
```

#### 2.3 結果に応じた処理

**リモートに存在しない場合**:
`AskUserQuestion`でプッシュするか確認

- 「はい、プッシュする」→ `git push -u origin {compare}`を実行
- 「いいえ、終了する」→ 終了

**リモートに存在するが、ローカルが先行している場合**:
`AskUserQuestion`でプッシュするか確認

- 「はい、プッシュする」→ `git push`を実行
- 「いいえ、既存コミットでPR作成」→ PR作成に進む

**同期済みの場合**:
そのままPR作成に進む

### 3. PR説明の生成

`Skill`ツールを使用して`format-pr-description`スキルを実行し、PRタイトルとディスクリプションを自動生成します。

```
Skill tool with:
- skill: "format-pr-description"
- args: "{base} {compare}"
```

### 4. ユーザー確認

`AskUserQuestion`で生成したタイトルとディスクリプションをユーザーに提示し、承認を得ます。

**質問形式**:

- 「はい、このままPR作成する」→ PR作成に進む
- 「いいえ、中止する」→ 終了
- 「修正の要望を入力する」→ 修正内容を受け取り、反映してから再度確認

### 5. PR作成

`gh pr create`コマンドを使用してPRを作成します：

```bash
gh pr create --base <base> --head <compare> --title "タイトル" --body "$(cat <<'EOF'
ディスクリプション
EOF
)"
```

### 6. 結果の報告

PR作成後、PR URLをユーザーに報告します。

## 注意事項

- `gh` CLIがインストールされており、認証済みである必要があります
- リモートにブランチがプッシュされていない場合は、自動プッシュの確認を行います
- ブランチが存在しない場合はエラーになります
