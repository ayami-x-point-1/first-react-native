import { Dropdown } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
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
      options: ['light', 'dark'],
      description: 'ドロップダウンのスタイルバリアント',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
    value: {
      control: 'text',
      description: '選択された値',
    },
  },
  args: {
    onPress: fn(),
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    variant: 'light',
    placeholder: 'オプションを選択',
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Light</Text>
        <Dropdown
          variant="light"
          placeholder="オプションを選択"
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Dark</Text>
        <Dropdown
          variant="dark"
          placeholder="オプションを選択"
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Light with Value</Text>
        <Dropdown
          variant="light"
          placeholder="オプションを選択"
          value="選択済み"
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Dark with Value</Text>
        <Dropdown
          variant="dark"
          placeholder="オプションを選択"
          value="選択済み"
          onPress={fn()}
        />
      </View>
    </View>
  ),
};

/**
 * Light - ライトバリアント
 */
export const Light: Story = {
  args: {
    variant: 'light',
    placeholder: 'オプションを選択',
  },
};

/**
 * Dark - ダークバリアント
 */
export const Dark: Story = {
  args: {
    variant: 'dark',
    placeholder: 'オプションを選択',
  },
};

/**
 * 値が選択された状態
 */
export const WithValue: Story = {
  args: {
    variant: 'light',
    placeholder: 'オプションを選択',
    value: '東京都',
  },
};

/**
 * プレースホルダーのみ
 */
export const WithPlaceholder: Story = {
  args: {
    variant: 'light',
    placeholder: '都道府県を選択してください',
  },
};

/**
 * カスタムプレースホルダー
 */
export const CustomPlaceholder: Story = {
  args: {
    variant: 'light',
    placeholder: '言語を選択',
    value: '日本語',
  },
};

/**
 * フォーム内での使用例
 */
export const InForm: Story = {
  args: {
    variant: 'light',
    placeholder: 'オプションを選択',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          プロフィール設定
        </Text>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">都道府県</Text>
          <Dropdown
            variant="light"
            placeholder="都道府県を選択"
            value="東京都"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">職業</Text>
          <Dropdown
            variant="light"
            placeholder="職業を選択"
            value="エンジニア"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">興味のある分野</Text>
          <Dropdown
            variant="light"
            placeholder="分野を選択"
            onPress={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * 設定画面での使用例
 */
export const InSettings: Story = {
  args: {
    variant: 'light',
    placeholder: 'オプションを選択',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          アプリ設定
        </Text>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">言語</Text>
          <Dropdown
            variant="light"
            placeholder="言語を選択"
            value="日本語"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">テーマ</Text>
          <Dropdown
            variant="light"
            placeholder="テーマを選択"
            value="ライト"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">通知設定</Text>
          <Dropdown
            variant="light"
            placeholder="通知設定を選択"
            value="すべて"
            onPress={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * ダークモードでの使用例
 */
export const InDarkMode: Story = {
  args: {
    variant: 'dark',
    placeholder: 'オプションを選択',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-900 p-4 rounded-xl gap-3">
        <Text className="text-white text-base font-semibold">
          フィルター
        </Text>
        <View className="gap-2">
          <Text className="text-neutral-300 text-sm">カテゴリ</Text>
          <Dropdown
            variant="dark"
            placeholder="カテゴリを選択"
            value="テクノロジー"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-300 text-sm">並び順</Text>
          <Dropdown
            variant="dark"
            placeholder="並び順を選択"
            value="新着順"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-300 text-sm">期間</Text>
          <Dropdown
            variant="dark"
            placeholder="期間を選択"
            onPress={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * 複数のドロップダウンを含むフォーム
 */
export const InComplexForm: Story = {
  args: {
    variant: 'light',
    placeholder: 'オプションを選択',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          お届け先情報
        </Text>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">都道府県</Text>
          <Dropdown
            variant="light"
            placeholder="都道府県を選択"
            value="東京都"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">市区町村</Text>
          <Dropdown
            variant="light"
            placeholder="市区町村を選択"
            value="渋谷区"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">配送時間帯</Text>
          <Dropdown
            variant="light"
            placeholder="時間帯を選択"
            value="午前中"
            onPress={fn()}
          />
        </View>
        <View className="gap-2">
          <Text className="text-neutral-600 text-sm">配送方法</Text>
          <Dropdown
            variant="light"
            placeholder="配送方法を選択"
            value="通常配送"
            onPress={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * 検索フィルター
 */
export const InSearchFilter: Story = {
  args: {
    variant: 'light',
    placeholder: 'オプションを選択',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          商品検索
        </Text>
        <View className="flex-row gap-2">
          <View className="flex-1 gap-2">
            <Text className="text-neutral-600 text-sm">カテゴリ</Text>
            <Dropdown
              variant="light"
              placeholder="カテゴリ"
              onPress={fn()}
            />
          </View>
          <View className="flex-1 gap-2">
            <Text className="text-neutral-600 text-sm">価格帯</Text>
            <Dropdown
              variant="light"
              placeholder="価格帯"
              onPress={fn()}
            />
          </View>
        </View>
        <View className="flex-row gap-2">
          <View className="flex-1 gap-2">
            <Text className="text-neutral-600 text-sm">ブランド</Text>
            <Dropdown
              variant="light"
              placeholder="ブランド"
              onPress={fn()}
            />
          </View>
          <View className="flex-1 gap-2">
            <Text className="text-neutral-600 text-sm">評価</Text>
            <Dropdown
              variant="light"
              placeholder="評価"
              onPress={fn()}
            />
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
    variant: 'light',
    placeholder: 'オプションを選択してください',
    value: '',
  },
};
