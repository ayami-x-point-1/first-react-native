import { Button } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
      description: 'ボタンのスタイルバリアント',
    },
    children: {
      control: 'text',
      description: 'ボタンのラベルテキスト',
    },
    disabled: {
      control: 'boolean',
      description: '無効状態',
    },
  },
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Primary</Text>
        <Button variant="primary" onPress={fn()}>
          Primary Button
        </Button>
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Outline</Text>
        <Button variant="outline" onPress={fn()}>
          Outline Button
        </Button>
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Disabled (Primary)</Text>
        <Button variant="primary" disabled onPress={fn()}>
          Disabled Button
        </Button>
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Disabled (Outline)</Text>
        <Button variant="outline" disabled onPress={fn()}>
          Disabled Button
        </Button>
      </View>
    </View>
  ),
};

/**
 * Primaryバリアント
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

/**
 * Outlineバリアント
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

/**
 * 無効状態
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

/**
 * 長いテキスト
 */
export const LongText: Story = {
  args: {
    variant: 'primary',
    children: 'これはとても長いボタンラベルテキストです',
  },
};

/**
 * フォーム内での使用例
 */
export const InForm: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          ログインフォーム
        </Text>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">メールアドレス</Text>
          <View className="bg-neutral-200 p-3 rounded-lg">
            <Text className="text-neutral-400">example@email.com</Text>
          </View>
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">パスワード</Text>
          <View className="bg-neutral-200 p-3 rounded-lg">
            <Text className="text-neutral-400">••••••••</Text>
          </View>
        </View>
        <View className="mt-2 gap-2">
          <Button variant="primary" onPress={fn()}>
            ログイン
          </Button>
          <Button variant="outline" onPress={fn()}>
            キャンセル
          </Button>
        </View>
      </View>
    </View>
  ),
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    children: 'ボタン',
    disabled: false,
  },
};
