import { Review } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';

const meta = {
  title: 'UI/Review',
  component: Review,
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: 'text',
      description: 'レビュー投稿者の名前',
    },
    userAvatar: {
      control: 'text',
      description: 'ユーザーのアバター画像URL',
    },
    date: {
      control: 'text',
      description: '投稿日時',
    },
    rating: {
      control: 'number',
      description: '評価（0-5の星）',
    },
    comment: {
      control: 'text',
      description: 'レビューコメント',
    },
    likes: {
      control: 'number',
      description: 'いいね数',
    },
  },
  args: {},
} satisfies Meta<typeof Review>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleAvatar = 'https://picsum.photos/100/100';
const sampleImages = [
  'https://picsum.photos/200/200?random=1',
  'https://picsum.photos/200/200?random=2',
  'https://picsum.photos/200/200?random=3',
  'https://picsum.photos/200/200?random=4',
  'https://picsum.photos/200/200?random=5',
];
const sampleImagesMany = [
  'https://picsum.photos/200/200?random=1',
  'https://picsum.photos/200/200?random=2',
  'https://picsum.photos/200/200?random=3',
  'https://picsum.photos/200/200?random=4',
  'https://picsum.photos/200/200?random=5',
  'https://picsum.photos/200/200?random=6',
  'https://picsum.photos/200/200?random=7',
];

/**
 * すべてのパターンを一覧表示
 */
export const AllVariants: Story = {
  args: {
    userName: '山田 太郎',
    date: '2024年1月15日',
    rating: 5,
    comment: 'とても良い商品でした。',
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">基本レビュー</Text>
        <Review
          userName="山田 太郎"
          date="2024年1月15日"
          rating={5}
          comment="とても良い商品でした。品質も高く、使いやすいです。"
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">アバター付き</Text>
        <Review
          userName="田中 花子"
          userAvatar={sampleAvatar}
          date="2024年1月14日"
          rating={4}
          comment="満足しています。配送も早くて助かりました。"
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">画像付き</Text>
        <Review
          userName="佐藤 次郎"
          userAvatar={sampleAvatar}
          date="2024年1月13日"
          rating={5}
          comment="写真の通りでした！大満足です。"
          images={sampleImages}
          likes={32}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">画像6枚以上（+N表示）</Text>
        <Review
          userName="鈴木 一郎"
          userAvatar={sampleAvatar}
          date="2024年1月12日"
          rating={5}
          comment="たくさん写真を撮りました！"
          images={sampleImagesMany}
          likes={45}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">いいね数のみ</Text>
        <Review
          userName="高橋 美咲"
          userAvatar={sampleAvatar}
          date="2024年1月11日"
          rating={4}
          comment="良い商品でした。"
          likes={68}
        />
      </View>
    </View>
  ),
};

/**
 * デフォルト - 基本レビュー
 */
export const Default: Story = {
  args: {
    userName: '山田 太郎',
    date: '2024年1月15日',
    rating: 5,
    comment: 'とても良い商品でした。品質も高く、使いやすいです。',
  },
};

/**
 * アバター付き
 */
export const WithAvatar: Story = {
  args: {
    userName: '田中 花子',
    userAvatar: sampleAvatar,
    date: '2024年1月14日',
    rating: 4,
    comment: '満足しています。配送も早くて助かりました。',
  },
};

/**
 * 画像付き
 */
export const WithImages: Story = {
  args: {
    userName: '佐藤 次郎',
    userAvatar: sampleAvatar,
    date: '2024年1月13日',
    rating: 5,
    comment: '写真の通りでした！大満足です。',
    images: sampleImages,
    likes: 32,
  },
};

/**
 * 画像多数（6枚以上）
 */
export const WithManyImages: Story = {
  args: {
    userName: '鈴木 一郎',
    userAvatar: sampleAvatar,
    date: '2024年1月12日',
    rating: 5,
    comment: 'たくさん写真を撮りました！どれも素晴らしいです。',
    images: sampleImagesMany,
    likes: 45,
  },
};

/**
 * 評価5つ星
 */
export const FiveStars: Story = {
  args: {
    userName: '高橋 美咲',
    userAvatar: sampleAvatar,
    date: '2024年1月11日',
    rating: 5,
    comment: '完璧です！期待以上の品質でした。また購入したいと思います。',
  },
};

/**
 * 評価4つ星
 */
export const FourStars: Story = {
  args: {
    userName: '伊藤 健太',
    userAvatar: sampleAvatar,
    date: '2024年1月10日',
    rating: 4,
    comment: '良い商品です。ただ、もう少し安ければ嬉しかったです。',
  },
};

/**
 * 評価3つ星
 */
export const ThreeStars: Story = {
  args: {
    userName: '渡辺 真理',
    userAvatar: sampleAvatar,
    date: '2024年1月9日',
    rating: 3,
    comment: '普通です。可もなく不可もなくといった感じでした。',
  },
};

/**
 * 評価2つ星
 */
export const TwoStars: Story = {
  args: {
    userName: '中村 浩二',
    userAvatar: sampleAvatar,
    date: '2024年1月8日',
    rating: 2,
    comment: '期待していたほどではありませんでした。',
  },
};

/**
 * 評価1つ星
 */
export const OneStar: Story = {
  args: {
    userName: '小林 絵美',
    userAvatar: sampleAvatar,
    date: '2024年1月7日',
    rating: 1,
    comment: '残念ながら、私には合いませんでした。',
  },
};

/**
 * 長いコメント
 */
export const LongComment: Story = {
  args: {
    userName: '加藤 裕子',
    userAvatar: sampleAvatar,
    date: '2024年1月6日',
    rating: 5,
    comment:
      'この商品は本当に素晴らしいです。長年探していた理想的な製品に出会えました。品質も非常に高く、デザインも洗練されていて、毎日使うのが楽しみです。配送も迅速で、梱包も丁寧でした。価格は少し高めですが、その価値は十分にあると思います。友人にもおすすめしたいと思います。',
    likes: 128,
  },
};

/**
 * いいね数付き
 */
export const WithLikes: Story = {
  args: {
    userName: '山本 健太',
    userAvatar: sampleAvatar,
    date: '2024年1月5日',
    rating: 5,
    comment: '最高の商品です！みんなにおすすめしたい。',
    likes: 68,
  },
};

/**
 * 商品レビューリストでの使用例
 */
export const InProductReviews: Story = {
  args: {
    userName: '山田 太郎',
    date: '2024年1月15日',
    rating: 5,
    comment: 'とても良い商品でした。',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <View className="flex-row items-center justify-between">
          <Text className="text-neutral-900 text-base font-semibold">
            カスタマーレビュー
          </Text>
          <View className="flex-row items-center gap-1">
            <Text className="text-primary-500 text-lg font-semibold">4.5</Text>
            <Text className="text-neutral-600 text-sm">★</Text>
            <Text className="text-neutral-600 text-sm">(124件)</Text>
          </View>
        </View>

        <Review
          userName="山田 太郎"
          userAvatar={sampleAvatar}
          date="2024年1月15日"
          rating={5}
          comment="とても良い商品でした。品質も高く、使いやすいです。リピート購入を検討しています。"
          images={sampleImages}
          likes={95}
        />

        <Review
          userName="田中 花子"
          userAvatar={sampleAvatar}
          date="2024年1月14日"
          rating={4}
          comment="満足しています。配送も早くて助かりました。"
          likes={42}
        />

        <Review
          userName="佐藤 次郎"
          userAvatar={sampleAvatar}
          date="2024年1月13日"
          rating={5}
          comment="写真の通りでした！大満足です。"
          images={sampleImages}
          likes={68}
        />
      </View>
    </View>
  ),
};

/**
 * レストランレビューでの使用例
 */
export const InRestaurantReviews: Story = {
  args: {
    userName: '山田 太郎',
    date: '2024年1月15日',
    rating: 5,
    comment: 'とても美味しかったです。',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          お店のレビュー
        </Text>

        <Review
          userName="山田 太郎"
          userAvatar={sampleAvatar}
          date="2024年1月15日"
          rating={5}
          comment="料理がとても美味しく、雰囲気も良かったです。また来たいと思います。"
          images={sampleImages}
          likes={87}
        />

        <Review
          userName="鈴木 一郎"
          userAvatar={sampleAvatar}
          date="2024年1月12日"
          rating={4}
          comment="サービスが素晴らしかったです。価格も妥当だと思います。"
          likes={54}
        />

        <Review
          userName="高橋 美咲"
          userAvatar={sampleAvatar}
          date="2024年1月10日"
          rating={5}
          comment="おすすめのお店です。予約して行くことをお勧めします。"
          likes={102}
        />
      </View>
    </View>
  ),
};

/**
 * ホテルレビューでの使用例
 */
export const InHotelReviews: Story = {
  args: {
    userName: '山田 太郎',
    date: '2024年1月15日',
    rating: 5,
    comment: '快適に過ごせました。',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          宿泊者のレビュー
        </Text>

        <Review
          userName="山田 太郎"
          userAvatar={sampleAvatar}
          date="2024年1月15日"
          rating={5}
          comment="部屋が清潔で、スタッフの対応も素晴らしかったです。朝食も美味しかったです。"
          images={sampleImages}
          likes={112}
        />

        <Review
          userName="田中 花子"
          userAvatar={sampleAvatar}
          date="2024年1月13日"
          rating={4}
          comment="立地が良く、観光に便利でした。また利用したいです。"
          likes={73}
        />

        <Review
          userName="佐藤 次郎"
          userAvatar={sampleAvatar}
          date="2024年1月11日"
          rating={5}
          comment="価格以上の価値がありました。設備も充実していて快適でした。"
          images={sampleImages}
          likes={95}
        />
      </View>
    </View>
  ),
};

/**
 * アプリレビューでの使用例
 */
export const InAppReviews: Story = {
  args: {
    userName: '山田 太郎',
    date: '2024年1月15日',
    rating: 5,
    comment: '使いやすいアプリです。',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <View className="flex-row items-center justify-between">
          <Text className="text-neutral-900 text-base font-semibold">
            ユーザーレビュー
          </Text>
          <View className="flex-row items-center gap-1">
            <Text className="text-primary-500 text-lg font-semibold">4.8</Text>
            <Text className="text-neutral-600 text-sm">★</Text>
          </View>
        </View>

        <Review
          userName="山田 太郎"
          userAvatar={sampleAvatar}
          date="2024年1月15日"
          rating={5}
          comment="UIがシンプルで使いやすいです。機能も充実していて、毎日使っています。"
        />

        <Review
          userName="田中 花子"
          userAvatar={sampleAvatar}
          date="2024年1月14日"
          rating={5}
          comment="このアプリのおかげで生活が便利になりました。おすすめです！"
        />

        <Review
          userName="佐藤 次郎"
          userAvatar={sampleAvatar}
          date="2024年1月13日"
          rating={4}
          comment="良いアプリです。たまにバグがありますが、概ね満足しています。"
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
    userName: '山田 太郎',
    userAvatar: sampleAvatar,
    date: '2024年1月15日',
    rating: 5,
    comment: 'とても良い商品でした。品質も高く、使いやすいです。',
    images: sampleImages,
    likes: 75,
  },
};
