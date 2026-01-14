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
    subtitle: {
      control: 'text',
      description: 'サブタイトル',
    },
    price: {
      control: 'text',
      description: '価格表示',
    },
    rating: {
      control: 'number',
      description: '評価（0-5）',
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
          title="大きいカード"
          subtitle="bigバリアント"
          price="¥1,000"
          rating={4.5}
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Medium</Text>
        <Card
          variant="medium"
          image={sampleImage}
          title="中サイズカード"
          subtitle="mediumバリアント"
          price="¥800"
          rating={4.0}
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Small</Text>
        <Card
          variant="small"
          image={sampleImage}
          title="小サイズカード"
          subtitle="smallバリアント"
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Horizontal</Text>
        <Card
          variant="horizontal"
          image={sampleImage}
          title="横型カード"
          subtitle="horizontalバリアント"
          price="¥1,200"
          rating={4.8}
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Category</Text>
        <Card
          variant="category"
          image={sampleImage}
          title="カテゴリ"
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
    title: '大きいカード',
    subtitle: 'bigバリアント',
    price: '¥1,000',
    rating: 4.5,
  },
};

/**
 * Medium - 中サイズカード
 */
export const Medium: Story = {
  args: {
    variant: 'medium',
    image: sampleImage,
    title: '中サイズカード',
    subtitle: 'mediumバリアント',
    price: '¥800',
    rating: 4.0,
  },
};

/**
 * Small - 小サイズカード
 */
export const Small: Story = {
  args: {
    variant: 'small',
    image: sampleImage,
    title: '小サイズカード',
    subtitle: 'smallバリアント',
  },
};

/**
 * Horizontal - 横型カード
 */
export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
    image: sampleImage,
    title: '横型カード',
    subtitle: 'horizontalバリアント',
    price: '¥1,200',
    rating: 4.8,
  },
};

/**
 * GridShort - グリッド用短いカード
 */
export const GridShort: Story = {
  args: {
    variant: 'grid-short',
    image: sampleImage,
    title: 'グリッドカード（短）',
    price: '¥500',
    rating: 3.5,
  },
};

/**
 * GridLong - グリッド用長いカード
 */
export const GridLong: Story = {
  args: {
    variant: 'grid-long',
    image: sampleImage,
    title: 'グリッドカード（長）',
    price: '¥600',
    rating: 4.2,
  },
};

/**
 * Category - カテゴリカード
 */
export const Category: Story = {
  args: {
    variant: 'category',
    image: sampleImage,
    title: 'カテゴリ',
  },
};

/**
 * バッジ付き
 */
export const WithBadge: Story = {
  args: {
    variant: 'medium',
    image: sampleImage,
    title: 'バッジ付きカード',
    subtitle: 'NEW',
    price: '¥1,500',
    rating: 5.0,
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
        <Text className="text-neutral-900 text-base font-semibold">商品一覧</Text>
        <View className="flex-row flex-wrap gap-2">
          <Card
            variant="grid-short"
            image={sampleImage}
            title="商品1"
            price="¥500"
            rating={4.0}
            onPress={fn()}
          />
          <Card
            variant="grid-short"
            image={sampleImage}
            title="商品2"
            price="¥600"
            rating={4.5}
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
            title="商品3"
            price="¥450"
            rating={3.8}
            onPress={fn()}
          />
          <Card
            variant="grid-short"
            image={sampleImage}
            title="商品4"
            price="¥700"
            rating={4.7}
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
    title: 'カードタイトル',
    subtitle: 'サブタイトル',
    price: '¥1,000',
    rating: 4.5,
  },
};
