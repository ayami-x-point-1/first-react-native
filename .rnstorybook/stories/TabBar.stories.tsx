import { TabBar, TabBarItem } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/TabBar',
  component: TabBar,
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: null,
  },
} satisfies Meta<typeof TabBar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのパターンを一覧表示
 */
export const AllVariants: Story = {
  args: {},
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">基本的なタブバー</Text>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔍</Text>}
            label="検索"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">❤️</Text>}
            label="お気に入り"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">👤</Text>}
            label="プロフィール"
            onPress={fn()}
          />
        </TabBar>
      </View>

      <View>
        <Text className="text-neutral-900 mb-2 text-sm">通知バッジ付き</Text>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">📧</Text>}
            label="メッセージ"
            hasNotification={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔔</Text>}
            label="通知"
            hasNotification={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">👤</Text>}
            label="プロフィール"
            onPress={fn()}
          />
        </TabBar>
      </View>

      <View>
        <Text className="text-neutral-900 mb-2 text-sm">3つのタブ</Text>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔍</Text>}
            label="検索"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">👤</Text>}
            label="プロフィール"
            onPress={fn()}
          />
        </TabBar>
      </View>

      <View>
        <Text className="text-neutral-900 mb-2 text-sm">5つのタブ</Text>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔍</Text>}
            label="検索"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">➕</Text>}
            label="投稿"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔔</Text>}
            label="通知"
            hasNotification={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">👤</Text>}
            label="プロフィール"
            onPress={fn()}
          />
        </TabBar>
      </View>
    </View>
  ),
};

/**
 * デフォルト - 基本的なタブバー
 */
export const Default: Story = {
  args: {},
  render: () => (
    <TabBar>
      <TabBarItem
        icon={<Text className="text-xl">🏠</Text>}
        label="ホーム"
        isActive={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">🔍</Text>}
        label="検索"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">❤️</Text>}
        label="お気に入り"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">👤</Text>}
        label="プロフィール"
        onPress={fn()}
      />
    </TabBar>
  ),
};

/**
 * 通知バッジ付き
 */
export const WithNotifications: Story = {
  args: {},
  render: () => (
    <TabBar>
      <TabBarItem
        icon={<Text className="text-xl">🏠</Text>}
        label="ホーム"
        isActive={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">📧</Text>}
        label="メッセージ"
        hasNotification={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">🔔</Text>}
        label="通知"
        hasNotification={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">👤</Text>}
        label="プロフィール"
        onPress={fn()}
      />
    </TabBar>
  ),
};

/**
 * 3つのタブ
 */
export const ThreeTabs: Story = {
  args: {},
  render: () => (
    <TabBar>
      <TabBarItem
        icon={<Text className="text-xl">🏠</Text>}
        label="ホーム"
        isActive={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">🔍</Text>}
        label="検索"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">👤</Text>}
        label="プロフィール"
        onPress={fn()}
      />
    </TabBar>
  ),
};

/**
 * 5つのタブ
 */
export const FiveTabs: Story = {
  args: {},
  render: () => (
    <TabBar>
      <TabBarItem
        icon={<Text className="text-xl">🏠</Text>}
        label="ホーム"
        isActive={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">🔍</Text>}
        label="検索"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">➕</Text>}
        label="投稿"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">🔔</Text>}
        label="通知"
        hasNotification={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">👤</Text>}
        label="プロフィール"
        onPress={fn()}
      />
    </TabBar>
  ),
};

/**
 * 2番目のタブがアクティブ
 */
export const SecondTabActive: Story = {
  args: {},
  render: () => (
    <TabBar>
      <TabBarItem
        icon={<Text className="text-xl">🏠</Text>}
        label="ホーム"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">🔍</Text>}
        label="検索"
        isActive={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">❤️</Text>}
        label="お気に入り"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">👤</Text>}
        label="プロフィール"
        onPress={fn()}
      />
    </TabBar>
  ),
};

/**
 * ECアプリでの使用例
 */
export const InEcommerceApp: Story = {
  args: {},
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 rounded-xl overflow-hidden">
        <View className="p-4 gap-3">
          <Text className="text-neutral-900 text-base font-semibold">
            商品一覧
          </Text>
          <View className="bg-neutral-100 p-8 rounded-lg items-center">
            <Text className="text-neutral-600">コンテンツエリア</Text>
          </View>
        </View>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔍</Text>}
            label="検索"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🛒</Text>}
            label="カート"
            hasNotification={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">👤</Text>}
            label="マイページ"
            onPress={fn()}
          />
        </TabBar>
      </View>
    </View>
  ),
};

/**
 * SNSアプリでの使用例
 */
export const InSocialApp: Story = {
  args: {},
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 rounded-xl overflow-hidden">
        <View className="p-4 gap-3">
          <Text className="text-neutral-900 text-base font-semibold">
            タイムライン
          </Text>
          <View className="bg-neutral-100 p-8 rounded-lg items-center">
            <Text className="text-neutral-600">投稿フィード</Text>
          </View>
        </View>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔍</Text>}
            label="検索"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">➕</Text>}
            label="投稿"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔔</Text>}
            label="通知"
            hasNotification={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">👤</Text>}
            label="プロフィール"
            onPress={fn()}
          />
        </TabBar>
      </View>
    </View>
  ),
};

/**
 * ニュースアプリでの使用例
 */
export const InNewsApp: Story = {
  args: {},
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 rounded-xl overflow-hidden">
        <View className="p-4 gap-3">
          <Text className="text-neutral-900 text-base font-semibold">
            トップニュース
          </Text>
          <View className="bg-neutral-100 p-8 rounded-lg items-center">
            <Text className="text-neutral-600">ニュース記事</Text>
          </View>
        </View>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">📰</Text>}
            label="トップ"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">📊</Text>}
            label="ビジネス"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">⚽</Text>}
            label="スポーツ"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🎬</Text>}
            label="エンタメ"
            onPress={fn()}
          />
        </TabBar>
      </View>
    </View>
  ),
};

/**
 * 音楽アプリでの使用例
 */
export const InMusicApp: Story = {
  args: {},
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 rounded-xl overflow-hidden">
        <View className="p-4 gap-3">
          <Text className="text-neutral-900 text-base font-semibold">
            おすすめの曲
          </Text>
          <View className="bg-neutral-100 p-8 rounded-lg items-center">
            <Text className="text-neutral-600">プレイリスト</Text>
          </View>
        </View>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔍</Text>}
            label="検索"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">📚</Text>}
            label="ライブラリ"
            onPress={fn()}
          />
        </TabBar>
      </View>
    </View>
  ),
};

/**
 * フードデリバリーアプリでの使用例
 */
export const InFoodDeliveryApp: Story = {
  args: {},
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 rounded-xl overflow-hidden">
        <View className="p-4 gap-3">
          <Text className="text-neutral-900 text-base font-semibold">
            近くのレストラン
          </Text>
          <View className="bg-neutral-100 p-8 rounded-lg items-center">
            <Text className="text-neutral-600">レストラン一覧</Text>
          </View>
        </View>
        <TabBar>
          <TabBarItem
            icon={<Text className="text-xl">🏠</Text>}
            label="ホーム"
            isActive={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🔍</Text>}
            label="検索"
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">🛍️</Text>}
            label="注文"
            hasNotification={true}
            onPress={fn()}
          />
          <TabBarItem
            icon={<Text className="text-xl">👤</Text>}
            label="アカウント"
            onPress={fn()}
          />
        </TabBar>
      </View>
    </View>
  ),
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {},
  render: () => (
    <TabBar>
      <TabBarItem
        icon={<Text className="text-xl">🏠</Text>}
        label="ホーム"
        isActive={true}
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">🔍</Text>}
        label="検索"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">❤️</Text>}
        label="お気に入り"
        onPress={fn()}
      />
      <TabBarItem
        icon={<Text className="text-xl">👤</Text>}
        label="プロフィール"
        onPress={fn()}
      />
    </TabBar>
  ),
};
