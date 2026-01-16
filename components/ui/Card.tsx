import { Fragment, ReactElement, ReactNode } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  Text,
  View,
} from 'react-native';
import { VerifiedIcon } from './icons/VerifiedIcon';

type CardVariant =
  | 'big'
  | 'medium'
  | 'small'
  | 'horizontal'
  | 'grid-short'
  | 'grid-long'
  | 'category';

type CardProps = PressableProps & {
  variant?: CardVariant;
  image?: ImageSourcePropType | string;
  title: string;
  isVerified?: boolean;
  status?: 'open' | 'closed';
  categories?: string[];
  rating?: number;
  distance?: string;
  deliveryInfo?: string;
  badge?: ReactNode;
};

const variantStyles: Record<
  CardVariant,
  {
    container: string;
    image: string;
    title: string;
    numberOfLines: number;
    contentContainer?: string;
  }
> = {
  big: {
    container: 'w-[305px]',
    image: 'h-[200px]',
    title: 'text-headline',
    numberOfLines: 2,
  },
  medium: {
    container: 'w-[205px]',
    image: 'h-[160px]',
    title: 'text-subhead',
    numberOfLines: 2,
  },
  small: {
    container: 'w-[145px]',
    image: 'h-[145px]',
    title: 'text-subhead',
    numberOfLines: 2,
  },
  horizontal: {
    container: 'flex-row h-[80px] gap-4',
    image: 'w-[80px] h-full',
    title: 'text-headline',
    numberOfLines: 2,
    contentContainer: 'flex-1 py-0',
  },
  'grid-short': {
    container: 'w-[145px]',
    image: 'h-[190px]',
    title: 'text-subhead',
    numberOfLines: 2,
  },
  'grid-long': {
    container: 'w-[145px]',
    image: 'h-[258px]',
    title: 'text-subhead',
    numberOfLines: 2,
  },
  category: {
    container: 'w-[100px]',
    image: 'h-[100px]',
    title: 'text-subhead text-center w-full',
    numberOfLines: 1,
  },
};

export function Card({
  variant = 'medium',
  image,
  title,
  isVerified,
  status,
  categories,
  rating,
  distance,
  deliveryInfo,
  badge,
  ...props
}: CardProps): ReactElement {
  const styles = variantStyles[variant];
  const imageSource = typeof image === 'string' ? { uri: image } : image;
  const accessibilityLabel = `${title}${status ? `, ${status}` : ''}${categories ? `, ${categories.join(', ')}` : ''}`;

  return (
    <Pressable
      className={`bg-white overflow-hidden ${styles.container}`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      {...props}
    >
      {image && (
        <View className={styles.image}>
          <Image
            source={imageSource}
            className="w-full h-full rounded-2xl"
            resizeMode="cover"
          />
          {badge && <View className="absolute top-2 left-2">{badge}</View>}
        </View>
      )}

      <View className={`p-3 ${styles.contentContainer || ''}`}>
        {/* タイトル行 + オフィシャルマーク */}
        <View className="flex-row items-center gap-1">
          <Text
            className={`${styles.title} text-text-primary`}
            numberOfLines={styles.numberOfLines}
          >
            {title}
          </Text>
          {isVerified && <VerifiedIcon size={24} />}
        </View>

        {/* ステータス + カテゴリー行 */}
        {(status || categories) && (
          <View className="flex-row items-center flex-wrap gap-1 mt-1">
            {status && (
              <Text
                className={`text-caption-2 font-medium ${
                  status === 'open' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {status === 'open' ? 'Open' : 'Closed'}
              </Text>
            )}
            {categories?.map((category, index) => (
              <Fragment key={category}>
                {(index === 0 && status) || index > 0 ? (
                  <Text className="text-caption-2 text-neutral-200">•</Text>
                ) : null}
                <Text className="text-caption-2 text-neutral-200">
                  {category}
                </Text>
              </Fragment>
            ))}
          </View>
        )}

        {/* フッター行: 評価バッジ + 距離 + 配送情報 */}
        {(rating !== undefined || distance || deliveryInfo) && (
          <View className="flex-row items-center flex-wrap gap-2 mt-2">
            {rating !== undefined && (
              <View className="bg-primary-500 px-2 py-0.5 rounded flex-row items-center gap-1">
                <Text className="text-white text-xs">★</Text>
                <Text className="text-white text-xs font-semibold">
                  {rating.toFixed(1)}
                </Text>
              </View>
            )}
            {distance && (
              <Text className="text-caption-2 text-neutral-200">
                {distance}
              </Text>
            )}
            {deliveryInfo && (
              <Text className="text-caption-2 text-neutral-200">
                {deliveryInfo}
              </Text>
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
}
