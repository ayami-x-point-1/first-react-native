import { View, Text, Image, ImageSourcePropType, Pressable, PressableProps } from 'react-native';
import { ReactNode } from 'react';

type CardVariant = 'big' | 'medium' | 'small' | 'horizontal' | 'grid-short' | 'grid-long' | 'category';
type CategoryType = 'burgers' | 'pizza' | 'sandwich';

type CardProps = PressableProps & {
  variant?: CardVariant;
  image?: ImageSourcePropType | string;
  title: string;
  subtitle?: string;
  price?: string;
  rating?: number;
  category?: CategoryType;
  badge?: ReactNode;
};

export function Card({
  variant = 'medium',
  image,
  title,
  subtitle,
  price,
  rating,
  category,
  badge,
  ...props
}: CardProps) {
  const isHorizontal = variant === 'horizontal';
  const isBig = variant === 'big';
  const isMedium = variant === 'medium';
  const isSmall = variant === 'small';
  const isGridShort = variant === 'grid-short';
  const isGridLong = variant === 'grid-long';
  const isCategory = variant === 'category';

  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <Pressable
      className={`bg-white rounded-2xl overflow-hidden ${
        isHorizontal
          ? 'flex-row h-[120px]'
          : isBig
          ? 'w-[305px]'
          : isMedium
          ? 'w-[205px]'
          : isSmall || isGridShort
          ? 'w-[145px]'
          : isGridLong
          ? 'w-[145px]'
          : isCategory
          ? 'w-[100px]'
          : ''
      }`}
      {...props}
    >
      {image && (
        <View
          className={`${
            isHorizontal
              ? 'w-[120px] h-full'
              : isBig
              ? 'h-[200px]'
              : isMedium
              ? 'h-[160px]'
              : isSmall || isGridShort
              ? 'h-[145px]'
              : isGridLong
              ? 'h-[200px]'
              : isCategory
              ? 'h-[100px]'
              : ''
          }`}
        >
          <Image
            source={imageSource}
            className="w-full h-full"
            resizeMode="cover"
          />
          {badge && (
            <View className="absolute top-2 left-2">
              {badge}
            </View>
          )}
        </View>
      )}

      <View className={`p-3 ${isHorizontal ? 'flex-1' : ''}`}>
        <Text
          className={`${
            isBig || isHorizontal ? 'text-headline' : 'text-subhead'
          } text-text-primary`}
          numberOfLines={isCategory ? 1 : 2}
        >
          {title}
        </Text>

        {subtitle && (
          <Text className="text-caption-1 text-neutral-200 mt-1" numberOfLines={1}>
            {subtitle}
          </Text>
        )}

        {(price || rating !== undefined) && (
          <View className="flex-row items-center justify-between mt-2">
            {price && (
              <Text className="text-subhead text-primary-500">
                {price}
              </Text>
            )}
            {rating !== undefined && (
              <View className="flex-row items-center gap-1">
                <Text className="text-caption-2 text-primary-500">★</Text>
                <Text className="text-caption-2 text-neutral-200">
                  {rating.toFixed(1)}
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
}
