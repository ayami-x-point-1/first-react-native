import { TabBar, TabBarItem } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';
import { useState } from 'react';

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
  render: () => {
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [activeTab3, setActiveTab3] = useState(0);
    const [activeTab4, setActiveTab4] = useState(0);
    return (
      <View className="gap-4">
        <View>
          <Text className="text-neutral-900 mb-2 text-sm">基本的なタブバー</Text>
          <TabBar>
            <TabBarItem
              icon={<Text className="text-xl">🏠</Text>}
              label="ホーム"
              isActive={activeTab1 === 0}
              onPress={() => setActiveTab1(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔍</Text>}
              label="検索"
              isActive={activeTab1 === 1}
              onPress={() => setActiveTab1(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">❤️</Text>}
              label="お気に入り"
              isActive={activeTab1 === 2}
              onPress={() => setActiveTab1(2)}
            />
            <TabBarItem
              icon={<Text className="text-xl">👤</Text>}
              label="プロフィール"
              isActive={activeTab1 === 3}
              onPress={() => setActiveTab1(3)}
            />
          </TabBar>
        </View>

        <View>
          <Text className="text-neutral-900 mb-2 text-sm">通知バッジ付き</Text>
          <TabBar>
            <TabBarItem
              icon={<Text className="text-xl">🏠</Text>}
              label="ホーム"
              isActive={activeTab2 === 0}
              onPress={() => setActiveTab2(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">📧</Text>}
              label="メッセージ"
              hasNotification={true}
              isActive={activeTab2 === 1}
              onPress={() => setActiveTab2(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔔</Text>}
              label="通知"
              hasNotification={true}
              isActive={activeTab2 === 2}
              onPress={() => setActiveTab2(2)}
            />
            <TabBarItem
              icon={<Text className="text-xl">👤</Text>}
              label="プロフィール"
              isActive={activeTab2 === 3}
              onPress={() => setActiveTab2(3)}
            />
          </TabBar>
        </View>

        <View>
          <Text className="text-neutral-900 mb-2 text-sm">3つのタブ</Text>
          <TabBar>
            <TabBarItem
              icon={<Text className="text-xl">🏠</Text>}
              label="ホーム"
              isActive={activeTab3 === 0}
              onPress={() => setActiveTab3(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔍</Text>}
              label="検索"
              isActive={activeTab3 === 1}
              onPress={() => setActiveTab3(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">👤</Text>}
              label="プロフィール"
              isActive={activeTab3 === 2}
              onPress={() => setActiveTab3(2)}
            />
          </TabBar>
        </View>

        <View>
          <Text className="text-neutral-900 mb-2 text-sm">5つのタブ</Text>
          <TabBar>
            <TabBarItem
              icon={<Text className="text-xl">🏠</Text>}
              label="ホーム"
              isActive={activeTab4 === 0}
              onPress={() => setActiveTab4(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔍</Text>}
              label="検索"
              isActive={activeTab4 === 1}
              onPress={() => setActiveTab4(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">➕</Text>}
              label="投稿"
              isActive={activeTab4 === 2}
              onPress={() => setActiveTab4(2)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔔</Text>}
              label="通知"
              hasNotification={true}
              isActive={activeTab4 === 3}
              onPress={() => setActiveTab4(3)}
            />
            <TabBarItem
              icon={<Text className="text-xl">👤</Text>}
              label="プロフィール"
              isActive={activeTab4 === 4}
              onPress={() => setActiveTab4(4)}
            />
          </TabBar>
        </View>
      </View>
    );
  },
};

/**
 * デフォルト - 基本的なタブバー
 */
export const Default: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <TabBar>
        <TabBarItem
          icon={<Text className="text-xl">🏠</Text>}
          label="ホーム"
          isActive={activeTab === 0}
          onPress={() => setActiveTab(0)}
        />
        <TabBarItem
          icon={<Text className="text-xl">🔍</Text>}
          label="検索"
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <TabBarItem
          icon={<Text className="text-xl">❤️</Text>}
          label="お気に入り"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
        <TabBarItem
          icon={<Text className="text-xl">👤</Text>}
          label="プロフィール"
          isActive={activeTab === 3}
          onPress={() => setActiveTab(3)}
        />
      </TabBar>
    );
  },
};

/**
 * 通知バッジ付き
 */
export const WithNotifications: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <TabBar>
        <TabBarItem
          icon={<Text className="text-xl">🏠</Text>}
          label="ホーム"
          isActive={activeTab === 0}
          onPress={() => setActiveTab(0)}
        />
        <TabBarItem
          icon={<Text className="text-xl">📧</Text>}
          label="メッセージ"
          hasNotification={true}
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <TabBarItem
          icon={<Text className="text-xl">🔔</Text>}
          label="通知"
          hasNotification={true}
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
        <TabBarItem
          icon={<Text className="text-xl">👤</Text>}
          label="プロフィール"
          isActive={activeTab === 3}
          onPress={() => setActiveTab(3)}
        />
      </TabBar>
    );
  },
};

/**
 * 3つのタブ
 */
export const ThreeTabs: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <TabBar>
        <TabBarItem
          icon={<Text className="text-xl">🏠</Text>}
          label="ホーム"
          isActive={activeTab === 0}
          onPress={() => setActiveTab(0)}
        />
        <TabBarItem
          icon={<Text className="text-xl">🔍</Text>}
          label="検索"
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <TabBarItem
          icon={<Text className="text-xl">👤</Text>}
          label="プロフィール"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
      </TabBar>
    );
  },
};

/**
 * 5つのタブ
 */
export const FiveTabs: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <TabBar>
        <TabBarItem
          icon={<Text className="text-xl">🏠</Text>}
          label="ホーム"
          isActive={activeTab === 0}
          onPress={() => setActiveTab(0)}
        />
        <TabBarItem
          icon={<Text className="text-xl">🔍</Text>}
          label="検索"
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <TabBarItem
          icon={<Text className="text-xl">➕</Text>}
          label="投稿"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
        <TabBarItem
          icon={<Text className="text-xl">🔔</Text>}
          label="通知"
          hasNotification={true}
          isActive={activeTab === 3}
          onPress={() => setActiveTab(3)}
        />
        <TabBarItem
          icon={<Text className="text-xl">👤</Text>}
          label="プロフィール"
          isActive={activeTab === 4}
          onPress={() => setActiveTab(4)}
        />
      </TabBar>
    );
  },
};

/**
 * 2番目のタブがアクティブ
 */
export const SecondTabActive: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
      <TabBar>
        <TabBarItem
          icon={<Text className="text-xl">🏠</Text>}
          label="ホーム"
          isActive={activeTab === 0}
          onPress={() => setActiveTab(0)}
        />
        <TabBarItem
          icon={<Text className="text-xl">🔍</Text>}
          label="検索"
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <TabBarItem
          icon={<Text className="text-xl">❤️</Text>}
          label="お気に入り"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
        <TabBarItem
          icon={<Text className="text-xl">👤</Text>}
          label="プロフィール"
          isActive={activeTab === 3}
          onPress={() => setActiveTab(3)}
        />
      </TabBar>
    );
  },
};

/**
 * ECアプリでの使用例
 */
export const InEcommerceApp: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
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
              isActive={activeTab === 0}
              onPress={() => setActiveTab(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔍</Text>}
              label="検索"
              isActive={activeTab === 1}
              onPress={() => setActiveTab(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🛒</Text>}
              label="カート"
              hasNotification={true}
              isActive={activeTab === 2}
              onPress={() => setActiveTab(2)}
            />
            <TabBarItem
              icon={<Text className="text-xl">👤</Text>}
              label="マイページ"
              isActive={activeTab === 3}
              onPress={() => setActiveTab(3)}
            />
          </TabBar>
        </View>
      </View>
    );
  },
};

/**
 * SNSアプリでの使用例
 */
export const InSocialApp: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
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
              isActive={activeTab === 0}
              onPress={() => setActiveTab(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔍</Text>}
              label="検索"
              isActive={activeTab === 1}
              onPress={() => setActiveTab(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">➕</Text>}
              label="投稿"
              isActive={activeTab === 2}
              onPress={() => setActiveTab(2)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔔</Text>}
              label="通知"
              hasNotification={true}
              isActive={activeTab === 3}
              onPress={() => setActiveTab(3)}
            />
            <TabBarItem
              icon={<Text className="text-xl">👤</Text>}
              label="プロフィール"
              isActive={activeTab === 4}
              onPress={() => setActiveTab(4)}
            />
          </TabBar>
        </View>
      </View>
    );
  },
};

/**
 * ニュースアプリでの使用例
 */
export const InNewsApp: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
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
              isActive={activeTab === 0}
              onPress={() => setActiveTab(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">📊</Text>}
              label="ビジネス"
              isActive={activeTab === 1}
              onPress={() => setActiveTab(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">⚽</Text>}
              label="スポーツ"
              isActive={activeTab === 2}
              onPress={() => setActiveTab(2)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🎬</Text>}
              label="エンタメ"
              isActive={activeTab === 3}
              onPress={() => setActiveTab(3)}
            />
          </TabBar>
        </View>
      </View>
    );
  },
};

/**
 * 音楽アプリでの使用例
 */
export const InMusicApp: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
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
              isActive={activeTab === 0}
              onPress={() => setActiveTab(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔍</Text>}
              label="検索"
              isActive={activeTab === 1}
              onPress={() => setActiveTab(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">📚</Text>}
              label="ライブラリ"
              isActive={activeTab === 2}
              onPress={() => setActiveTab(2)}
            />
          </TabBar>
        </View>
      </View>
    );
  },
};

/**
 * フードデリバリーアプリでの使用例
 */
export const InFoodDeliveryApp: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
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
              isActive={activeTab === 0}
              onPress={() => setActiveTab(0)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🔍</Text>}
              label="検索"
              isActive={activeTab === 1}
              onPress={() => setActiveTab(1)}
            />
            <TabBarItem
              icon={<Text className="text-xl">🛍️</Text>}
              label="注文"
              hasNotification={true}
              isActive={activeTab === 2}
              onPress={() => setActiveTab(2)}
            />
            <TabBarItem
              icon={<Text className="text-xl">👤</Text>}
              label="アカウント"
              isActive={activeTab === 3}
              onPress={() => setActiveTab(3)}
            />
          </TabBar>
        </View>
      </View>
    );
  },
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <TabBar>
        <TabBarItem
          icon={<Text className="text-xl">🏠</Text>}
          label="ホーム"
          isActive={activeTab === 0}
          onPress={() => setActiveTab(0)}
        />
        <TabBarItem
          icon={<Text className="text-xl">🔍</Text>}
          label="検索"
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <TabBarItem
          icon={<Text className="text-xl">❤️</Text>}
          label="お気に入り"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
        <TabBarItem
          icon={<Text className="text-xl">👤</Text>}
          label="プロフィール"
          isActive={activeTab === 3}
          onPress={() => setActiveTab(3)}
        />
      </TabBar>
    );
  },
};
