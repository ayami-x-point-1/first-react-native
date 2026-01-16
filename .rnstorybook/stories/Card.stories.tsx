import { Card } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/Card',
  component: Card,
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
      options: [
        'big',
        'medium',
        'small',
        'horizontal',
        'grid-short',
        'grid-long',
        'category',
      ],
      description: 'カードのサイズバリアント',
    },
    title: {
      control: 'text',
      description: 'カードのタイトル',
    },
    isVerified: {
      control: 'boolean',
      description: 'オフィシャルマーク表示',
    },
    status: {
      control: 'select',
      options: ['open', 'closed'],
      description: '営業ステータス',
    },
    rating: {
      control: 'number',
      description: '評価（0-5）',
    },
    distance: {
      control: 'text',
      description: '距離表示',
    },
    deliveryInfo: {
      control: 'text',
      description: '配送情報',
    },
  },
  args: { onPress: fn() },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleImage = 'https://picsum.photos/400/300';

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    variant: 'medium',
    title: 'Sample Card',
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Big</Text>
        <Card
          variant="big"
          image={sampleImage}
          title="Starbucks"
          isVerified={true}
          status="open"
          categories={['Coffee', 'Tea', 'Cake']}
          rating={4.5}
          distance="1.5km"
          deliveryInfo="Free Shipping"
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Medium</Text>
        <Card
          variant="medium"
          image={sampleImage}
          title="Starbucks"
          isVerified={true}
          status="open"
          categories={['Coffee']}
          rating={4.0}
          distance="2.0km"
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Small</Text>
        <Card
          variant="small"
          image={sampleImage}
          title="Starbucks"
          isVerified={true}
          status="closed"
          categories={['Coffee']}
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Horizontal</Text>
        <Card
          variant="horizontal"
          image={sampleImage}
          title="Starbucks"
          isVerified={true}
          status="open"
          categories={['Coffee', 'Tea']}
          rating={4.8}
          distance="0.5km"
          deliveryInfo="Free Shipping"
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Category</Text>
        <Card
          variant="category"
          image={sampleImage}
          title="Coffee"
          onPress={fn()}
        />
      </View>
    </View>
  ),
};

/**
 * Big - 大サイズカード
 */
export const Big: Story = {
  args: {
    variant: 'big',
    image: sampleImage,
    title: 'Starbucks',
    isVerified: true,
    status: 'open',
    categories: ['Coffee', 'Tea', 'Cake'],
    rating: 4.5,
    distance: '1.5km',
    deliveryInfo: 'Free Shipping',
  },
};

/**
 * Medium - 中サイズカード
 */
export const Medium: Story = {
  args: {
    variant: 'medium',
    image: sampleImage,
    title: 'Starbucks',
    isVerified: true,
    status: 'open',
    categories: ['Coffee'],
    rating: 4.0,
    distance: '2.0km',
  },
};

/**
 * Small - 小サイズカード
 */
export const Small: Story = {
  args: {
    variant: 'small',
    image: sampleImage,
    title: 'Starbucks',
    status: 'closed',
    categories: ['Coffee'],
  },
};

/**
 * Horizontal - 横型カード
 */
export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
    image: sampleImage,
    title: 'Starbucks',
    isVerified: true,
    status: 'open',
    categories: ['Coffee', 'Tea'],
    rating: 4.8,
    distance: '0.5km',
    deliveryInfo: 'Free Shipping',
  },
};

/**
 * GridShort - グリッド用短いカード
 */
export const GridShort: Story = {
  args: {
    variant: 'grid-short',
    image: sampleImage,
    title: 'Starbucks',
    rating: 3.5,
    distance: '1.0km',
  },
};

/**
 * GridLong - グリッド用長いカード
 */
export const GridLong: Story = {
  args: {
    variant: 'grid-long',
    image: sampleImage,
    title: 'Starbucks',
    rating: 4.2,
    distance: '1.2km',
  },
};

/**
 * Category - カテゴリカード
 */
export const Category: Story = {
  args: {
    variant: 'category',
    image: sampleImage,
    title: 'Coffee',
  },
};

/**
 * バッジ付き
 */
export const WithBadge: Story = {
  args: {
    variant: 'medium',
    image: sampleImage,
    title: 'Starbucks',
    isVerified: true,
    status: 'open',
    categories: ['Coffee', 'Tea'],
    rating: 5.0,
    distance: '0.8km',
  },
  render: (args) => (
    <Card
      {...args}
      badge={
        <View className="bg-primary-500 px-2 py-1 rounded">
          <Text className="text-white text-xs font-semibold">NEW</Text>
        </View>
      }
    />
  ),
};

/**
 * オフィシャルマークなし
 */
export const WithoutVerified: Story = {
  args: {
    variant: 'medium',
    image: sampleImage,
    title: 'Local Cafe',
    isVerified: false,
    status: 'open',
    categories: ['Coffee'],
    rating: 3.8,
    distance: '2.5km',
  },
};

/**
 * Closedステータス
 */
export const ClosedStatus: Story = {
  args: {
    variant: 'medium',
    image: sampleImage,
    title: 'Night Restaurant',
    isVerified: true,
    status: 'closed',
    categories: ['Japanese', 'Sushi'],
    rating: 4.3,
    distance: '3.0km',
  },
};

/**
 * グリッドレイアウトでの使用例
 */
export const InGrid: Story = {
  args: {
    variant: 'medium',
    title: 'Card',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">人気のレストラン</Text>
        <View className="flex-row flex-wrap gap-2">
          <Card
            variant="grid-short"
            image={sampleImage}
            title="Starbucks"
            isVerified={true}
            rating={4.5}
            distance="1.0km"
            onPress={fn()}
          />
          <Card
            variant="grid-short"
            image={sampleImage}
            title="McDonald's"
            isVerified={true}
            rating={4.2}
            distance="1.5km"
            badge={
              <View className="bg-red-500 px-2 py-1 rounded">
                <Text className="text-white text-xs font-semibold">SALE</Text>
              </View>
            }
            onPress={fn()}
          />
          <Card
            variant="grid-short"
            image={sampleImage}
            title="KFC"
            rating={3.8}
            distance="2.0km"
            onPress={fn()}
          />
          <Card
            variant="grid-short"
            image={sampleImage}
            title="Subway"
            isVerified={true}
            rating={4.0}
            distance="1.8km"
            onPress={fn()}
          />
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
    variant: 'medium',
    image: sampleImage,
    title: 'Starbucks',
    isVerified: true,
    status: 'open',
    categories: ['Coffee', 'Tea'],
    rating: 4.5,
    distance: '1.5km',
    deliveryInfo: 'Free Shipping',
  },
};
