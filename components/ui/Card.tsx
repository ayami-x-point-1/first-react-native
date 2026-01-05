import { View, Text, Image, ImageSourcePropType, Pressable, PressableProps } from 'react-native';
import { ReactNode } from 'react';

type CardVariant = 'big' | 'medium' | 'small' | 'horizontal' | 'grid-short' | 'grid-long' | 'category';

type CardProps = PressableProps & {
  variant?: CardVariant;
  image?: ImageSourcePropType | string;
  title: string;
  subtitle?: string;
  price?: string;
  rating?: number;
  badge?: ReactNode;
};

const variantStyles: Record<CardVariant, {
  container: string;
  image: string;
  title: string;
  numberOfLines: number;
  contentContainer?: string;
}> = {
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
    container: 'flex-row h-[120px]',
    image: 'w-[120px] h-full',
    title: 'text-headline',
    numberOfLines: 2,
    contentContainer: 'flex-1',
  },
  'grid-short': {
    container: 'w-[145px]',
    image: 'h-[145px]',
    title: 'text-subhead',
    numberOfLines: 2,
  },
  'grid-long': {
    container: 'w-[145px]',
    image: 'h-[200px]',
    title: 'text-subhead',
    numberOfLines: 2,
  },
  category: {
    container: 'w-[100px]',
    image: 'h-[100px]',
    title: 'text-subhead',
    numberOfLines: 1,
  },
};

export function Card({
  variant = 'medium',
  image,
  title,
  subtitle,
  price,
  rating,
  badge,
  ...props
}: CardProps) {
  const styles = variantStyles[variant];
  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <Pressable
      className={`bg-white rounded-2xl overflow-hidden ${styles.container}`}
      {...props}
    >
      {image && (
        <View className={styles.image}>
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

      <View className={`p-3 ${styles.contentContainer || ''}`}>
        <Text
          className={`${styles.title} text-text-primary`}
          numberOfLines={styles.numberOfLines}
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
