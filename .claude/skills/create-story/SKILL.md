---
name: create-story
description: React Nativeコンポーネントの充実したStorybookストーリーファイルを作成します。コンポーネントのバリアント、使用例、インタラクティブなPlaygroundを含むstoriesを自動生成します。
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - AskUserQuestion
---

# Storybook Stories作成スキル

このスキルは、React Nativeコンポーネントの充実したStorybookストーリーファイルを作成します。

## 実行手順

### 1. コンポーネント情報の取得

引数が指定されている場合はそれを使用し、指定されていない場合は`AskUserQuestion`でコンポーネントのパスを質問する：

```
質問: "Storybookストーリーを作成するコンポーネントのパスを指定してください"
オプション:
- "components/ui/[コンポーネント名]" を手動入力
```

### 2. コンポーネントファイルの分析

指定されたコンポーネントファイルを読み込み、以下を分析する：
- コンポーネント名
- Propsの型定義（TypeScript interface/type）
- バリアント（variant型がある場合）
- 必須props、オプショナルprops
- ReactNodeを受け取るprops（children、アイコン系など）

### 3. 参考storiesの確認

既存のstoriesファイルを参考にするため、`.rnstorybook/stories/`ディレクトリ内の既存の`.stories.tsx`ファイルを読み込む。

### 4. storiesファイルの生成

以下の構造でstoriesファイルを生成する：

```typescript
import { [ComponentName] } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/[ComponentName]',
  component: [ComponentName],
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    // propsに応じたargTypesを生成
    // variant: { control: 'select', options: [...], description: '日本語説明' }
    // boolean props: { control: 'boolean', description: '日本語説明' }
    // string props: { control: 'text', description: '日本語説明' }
    // number props: { control: 'number', description: '日本語説明' }
  },
  args: {
    // onPress等のイベントハンドラにfn()を設定
    // 例: onPress: fn()
  },
} satisfies Meta<typeof [ComponentName]>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    // デフォルトargs
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">[バリアント名]</Text>
        {/* 各バリアントのコンポーネントを表示 */}
      </View>
    </View>
  ),
};

/**
 * [バリアント名] - バリアントの説明
 */
export const [VariantName]: Story = {
  args: {
    // バリアント固有のargs
  },
};

/**
 * [状態名] - 状態の説明
 */
export const [StateName]: Story = {
  args: {
    // 状態固有のargs
  },
  // ReactNode型のpropsが必要な場合
  render: (args) => (
    <[ComponentName] {...args} [reactNodeProp]={<Text>コンテンツ</Text>} />
  ),
};

/**
 * 実際の使用例（InForm / InGrid / InContext 等）
 */
export const In[Context]: Story = {
  args: {
    // デフォルトargs
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          [コンテキストタイトル]
        </Text>
        {/* 実際のユースケースを示す */}
      </View>
    </View>
  ),
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {
    // すべてのpropsをデフォルト値で設定
    // ReactNode型以外のpropsを設定
  },
  // ReactNode型のpropsがある場合はrenderで対応
};
```

### 5. ストーリーの内容

以下を含める：

1. **AllVariants**: すべてのバリアント/状態を一覧表示
   - 各バリアント/状態をセクションタイトル付きで表示
   - セクションタイトルは`<Text className="text-neutral-900 mb-2 text-sm">`で表示
   - バリアントがある場合：各バリアントを表示
   - 主要な状態（disabled、error、loading等）も含める

2. **個別のバリアント**: 各バリアントごとに個別のストーリー
   - JSDocコメントで日本語説明を追加（例：`/** * Primary - プライマリボタン */`）
   - Primary、Secondary、Outline等
   - Small、Medium、Large等
   - Big、Horizontal、Category等

3. **状態別ストーリー**: 該当するものを含める
   - Disabled（無効状態）
   - WithError（エラー状態）
   - WithLabel（ラベル付き）
   - WithIcon（アイコン付き - leftIcon/rightIconなど）
   - WithBadge（バッジ付き）
   - LongText（長いテキスト）
   等

4. **InContext/InForm/InGrid等**: 実際の使用例
   - フォーム内での使用（InForm）：日本語のフォームタイトルと複数のコンポーネントを組み合わせ
   - グリッドレイアウト内での使用（InGrid）：flex-rowとflex-wrapを使用
   - 実用的な日本語コンテンツ（「ログインフォーム」「商品一覧」等）

5. **Playground**: Controlsでインタラクティブに操作可能
   - すべてのpropsをデフォルト値で設定
   - 日本語のサンプルテキストを使用
   - ReactNode型のpropsは含めない（renderで対応が必要な場合は別ストーリーにする）

### 6. コーディング方針

プロジェクトのCLAUDE.mdに従い、以下を遵守する：

- **NativeWindを使用**: className属性でスタイリング
- **型安全性**: すべての型を明示的に定義
- **アクセシビリティ**: 必要に応じてaccessibility propsを設定
- **日本語コメント**: ストーリーの説明はJSDocコメントで日本語記述

### 7. ファイルの保存とStorybookへの反映

1. `.rnstorybook/stories/[ComponentName].stories.tsx`にファイルを作成
2. `npm run storybook-generate`コマンドを実行してStorybookに反映

### 8. 完了メッセージ

ユーザーに以下を伝える：
- 作成したstoriesファイルのパス
- 含まれるストーリーの一覧
- Storybookでの確認方法（`npm run storybook:ios`等）

## 重要なポイント

- **ScrollViewを使用**: decoratorで`<ScrollView className="bg-neutral-0" contentContainerClassName="p-4">`を使用
- **背景色は`bg-neutral-0`**: 白背景を使用（`bg-neutral-900`ではない）
- **render関数を使用する場合も必ずargsを定義**: TypeScriptエラーを回避するため
- **NativeWindを使用**: classNameでスタイリングし、インラインスタイルは避ける
- **日本語説明**: argTypesのdescriptionとJSDocコメントは日本語で記述
- **日本語サンプルテキスト**: デモ用のテキストは日本語を使用
- **セクションタイトル**: AllVariants内でバリアントを表示する際は`<Text className="text-neutral-900 mb-2 text-sm">`でタイトルを表示
- **充実した内容**: 単純なバリアント表示だけでなく、実際の使用例も含める
- **@エイリアスを使用**: `import { Component } from '@/components/ui'`の形式
- **fn()でイベントハンドラをモック**: `onPress={fn()}`等（Button、Card等のインタラクティブコンポーネント）
- **ReactNode型のprops**: render関数内で直接JSXを渡す（例：`leftIcon={<Text>🔍</Text>}`）
- **画像URL**: 画像が必要な場合は`https://picsum.photos/400/300`等を使用

## エラーハンドリング

- コンポーネントファイルが存在しない場合：エラーメッセージを表示して終了
- componentsディレクトリが存在しない場合：エラーメッセージを表示
- propsの型定義が見つからない場合：基本的なストーリーのみ生成し、ユーザーに手動調整を促す

## 参考

実際の形式とパターンは`.rnstorybook/stories/`内の既存storiesファイルを参照すること。
