import { AppBar } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/AppBar',
  component: AppBar,
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
      options: ['default', 'transparent'],
      description: 'AppBarのスタイルバリアント',
    },
    title: {
      control: 'text',
      description: 'タイトルテキスト',
    },
    leftIconLabel: {
      control: 'text',
      description: '左アイコンのアクセシビリティラベル',
    },
    rightIconLabel: {
      control: 'text',
      description: '右アイコンのアクセシビリティラベル',
    },
  },
  args: {
    onLeftPress: fn(),
    onRightPress: fn(),
  },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    variant: 'default',
    title: 'AppBar',
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Default</Text>
        <AppBar
          variant="default"
          title="ホーム"
          leftIcon={<Text className="text-xl">←</Text>}
          rightIcon={<Text className="text-xl">⋮</Text>}
          leftIconLabel="戻る"
          rightIconLabel="メニュー"
          onLeftPress={fn()}
          onRightPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Transparent</Text>
        <AppBar
          variant="transparent"
          title="マイページ"
          leftIcon={<Text className="text-xl">←</Text>}
          rightIcon={<Text className="text-xl">⚙</Text>}
          leftIconLabel="戻る"
          rightIconLabel="設定"
          onLeftPress={fn()}
          onRightPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Left Icon Only</Text>
        <AppBar
          variant="default"
          title="詳細"
          leftIcon={<Text className="text-xl">←</Text>}
          leftIconLabel="戻る"
          onLeftPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Right Icon Only</Text>
        <AppBar
          variant="default"
          title="通知"
          rightIcon={<Text className="text-xl">✓</Text>}
          rightIconLabel="すべて既読"
          onRightPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Title Only</Text>
        <AppBar variant="default" title="タイトルのみ" />
      </View>
    </View>
  ),
};

/**
 * Default - デフォルトバリアント
 */
export const Default: Story = {
  args: {
    variant: 'default',
    title: 'ホーム',
  },
  render: (args) => (
    <AppBar
      {...args}
      leftIcon={<Text className="text-xl">←</Text>}
      rightIcon={<Text className="text-xl">⋮</Text>}
      leftIconLabel="戻る"
      rightIconLabel="メニュー"
      onLeftPress={fn()}
      onRightPress={fn()}
    />
  ),
};

/**
 * Transparent - 透明バリアント
 */
export const Transparent: Story = {
  args: {
    variant: 'transparent',
    title: 'マイページ',
  },
  render: (args) => (
    <View className="bg-neutral-100 p-4">
      <AppBar
        {...args}
        leftIcon={<Text className="text-xl">←</Text>}
        rightIcon={<Text className="text-xl">⚙</Text>}
        leftIconLabel="戻る"
        rightIconLabel="設定"
        onLeftPress={fn()}
        onRightPress={fn()}
      />
    </View>
  ),
};

/**
 * 左アイコン付き
 */
export const WithLeftIcon: Story = {
  args: {
    variant: 'default',
    title: '詳細',
    leftIconLabel: '戻る',
  },
  render: (args) => (
    <AppBar
      {...args}
      leftIcon={<Text className="text-xl">←</Text>}
      onLeftPress={fn()}
    />
  ),
};

/**
 * 右アイコン付き
 */
export const WithRightIcon: Story = {
  args: {
    variant: 'default',
    title: '通知',
    rightIconLabel: 'すべて既読',
  },
  render: (args) => (
    <AppBar
      {...args}
      rightIcon={<Text className="text-xl">✓</Text>}
      onRightPress={fn()}
    />
  ),
};

/**
 * 両方のアイコン付き
 */
export const WithBothIcons: Story = {
  args: {
    variant: 'default',
    title: '設定',
    leftIconLabel: '戻る',
    rightIconLabel: '保存',
  },
  render: (args) => (
    <AppBar
      {...args}
      leftIcon={<Text className="text-xl">←</Text>}
      rightIcon={<Text className="text-xl">✓</Text>}
      onLeftPress={fn()}
      onRightPress={fn()}
    />
  ),
};

/**
 * タイトルのみ
 */
export const TitleOnly: Story = {
  args: {
    variant: 'default',
    title: 'タイトルのみ',
  },
};

/**
 * 長いタイトル
 */
export const LongTitle: Story = {
  args: {
    variant: 'default',
    title: 'これはとても長いタイトルのテキストです',
  },
  render: (args) => (
    <AppBar
      {...args}
      leftIcon={<Text className="text-xl">←</Text>}
      rightIcon={<Text className="text-xl">⋮</Text>}
      leftIconLabel="戻る"
      rightIconLabel="メニュー"
      onLeftPress={fn()}
      onRightPress={fn()}
    />
  ),
};

/**
 * 検索アイコン付き
 */
export const WithSearchIcon: Story = {
  args: {
    variant: 'default',
    title: '商品一覧',
    rightIconLabel: '検索',
  },
  render: (args) => (
    <AppBar
      {...args}
      leftIcon={<Text className="text-xl">←</Text>}
      rightIcon={<Text className="text-xl">🔍</Text>}
      leftIconLabel="戻る"
      onLeftPress={fn()}
      onRightPress={fn()}
    />
  ),
};

/**
 * 画面での使用例
 */
export const InScreen: Story = {
  args: {
    variant: 'default',
    title: 'AppBar',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 rounded-xl overflow-hidden">
        <AppBar
          variant="default"
          title="プロフィール"
          leftIcon={<Text className="text-xl">←</Text>}
          rightIcon={<Text className="text-xl">⚙</Text>}
          leftIconLabel="戻る"
          rightIconLabel="設定"
          onLeftPress={fn()}
          onRightPress={fn()}
        />
        <View className="p-4 gap-3">
          <View className="items-center gap-2">
            <View className="w-20 h-20 bg-neutral-200 rounded-full" />
            <Text className="text-neutral-900 text-lg font-semibold">
              山田 太郎
            </Text>
            <Text className="text-neutral-600 text-sm">
              yamada@example.com
            </Text>
          </View>
          <View className="mt-4 gap-2">
            <View className="bg-neutral-100 p-4 rounded-lg">
              <Text className="text-neutral-600 text-sm">ユーザーID</Text>
              <Text className="text-neutral-900 text-base">12345678</Text>
            </View>
            <View className="bg-neutral-100 p-4 rounded-lg">
              <Text className="text-neutral-600 text-sm">登録日</Text>
              <Text className="text-neutral-900 text-base">2024年1月1日</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="bg-neutral-0 rounded-xl overflow-hidden">
        <AppBar
          variant="default"
          title="お知らせ"
          leftIcon={<Text className="text-xl">←</Text>}
          rightIcon={<Text className="text-xl">✓</Text>}
          leftIconLabel="戻る"
          rightIconLabel="すべて既読"
          onLeftPress={fn()}
          onRightPress={fn()}
        />
        <View className="p-4 gap-2">
          <View className="bg-neutral-100 p-3 rounded-lg">
            <Text className="text-neutral-900 font-semibold">
              新機能のお知らせ
            </Text>
            <Text className="text-neutral-600 text-sm">2024年1月15日</Text>
          </View>
          <View className="bg-neutral-100 p-3 rounded-lg">
            <Text className="text-neutral-900 font-semibold">
              メンテナンスのお知らせ
            </Text>
            <Text className="text-neutral-600 text-sm">2024年1月10日</Text>
          </View>
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
    variant: 'default',
    title: 'タイトル',
    leftIconLabel: '左アイコン',
    rightIconLabel: '右アイコン',
  },
};
