import { Input } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';

const meta = {
  title: 'UI/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'ラベルテキスト',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
    error: {
      control: 'text',
      description: 'エラーメッセージ',
    },
    editable: {
      control: 'boolean',
      description: '編集可能かどうか',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Basic</Text>
        <Input placeholder="メールアドレスを入力" />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">With Label</Text>
        <Input label="メールアドレス" placeholder="example@email.com" />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">With Error</Text>
        <Input
          label="パスワード"
          placeholder="パスワードを入力"
          error="パスワードは8文字以上で入力してください"
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Disabled</Text>
        <Input label="無効状態" placeholder="編集できません" editable={false} />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">With Left Icon</Text>
        <Input
          label="検索"
          placeholder="キーワードを入力"
          leftIcon={<Text className="text-neutral-400">🔍</Text>}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">With Right Icon</Text>
        <Input
          label="パスワード"
          placeholder="パスワードを入力"
          secureTextEntry
          rightIcon={<Text className="text-neutral-400">👁</Text>}
        />
      </View>
    </View>
  ),
};

/**
 * 基本的な入力フィールド
 */
export const Basic: Story = {
  args: {
    placeholder: 'メールアドレスを入力',
  },
};

/**
 * ラベル付き
 */
export const WithLabel: Story = {
  args: {
    label: 'メールアドレス',
    placeholder: 'example@email.com',
  },
};

/**
 * エラー状態
 */
export const WithError: Story = {
  args: {
    label: 'パスワード',
    placeholder: 'パスワードを入力',
    error: 'パスワードは8文字以上で入力してください',
  },
};

/**
 * 無効状態
 */
export const Disabled: Story = {
  args: {
    label: '無効状態',
    placeholder: '編集できません',
    editable: false,
  },
};

/**
 * 左アイコン付き
 */
export const WithLeftIcon: Story = {
  args: {
    label: '検索',
    placeholder: 'キーワードを入力',
  },
  render: (args) => (
    <Input {...args} leftIcon={<Text className="text-neutral-400">🔍</Text>} />
  ),
};

/**
 * 右アイコン付き
 */
export const WithRightIcon: Story = {
  args: {
    label: 'パスワード',
    placeholder: 'パスワードを入力',
    secureTextEntry: true,
  },
  render: (args) => (
    <Input {...args} rightIcon={<Text className="text-neutral-400">👁</Text>} />
  ),
};

/**
 * フォーム内での使用例
 */
export const InForm: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          ユーザー登録フォーム
        </Text>
        <Input label="ユーザー名" placeholder="yamada_taro" />
        <Input
          label="メールアドレス"
          placeholder="example@email.com"
          leftIcon={<Text className="text-neutral-400">✉️</Text>}
        />
        <Input
          label="パスワード"
          placeholder="8文字以上で入力"
          secureTextEntry
          rightIcon={<Text className="text-neutral-400">👁</Text>}
        />
        <Input
          label="パスワード（確認）"
          placeholder="もう一度入力"
          secureTextEntry
          error="パスワードが一致しません"
        />
      </View>
    </View>
  ),
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {
    label: 'ラベル',
    placeholder: 'プレースホルダー',
    error: '',
    editable: true,
  },
};
