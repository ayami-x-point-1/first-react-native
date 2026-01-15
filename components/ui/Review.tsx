import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { ReactElement } from 'react';

type ReviewProps = {
  userName: string;
  userAvatar?: ImageSourcePropType | string;
  date: string;
  rating: number;
  comment: string;
  images?: (ImageSourcePropType | string)[];
  likes?: number;
};

export function Review({
  userName,
  userAvatar,
  date,
  rating,
  comment,
  images = [],
  likes,
}: ReviewProps): ReactElement {
  const validRating = Math.max(0, Math.min(5, rating));
  const hasImages = images.length > 0;

  return (
    <View
      className={`bg-white p-4 rounded-2xl ${hasImages ? 'min-h-[200px]' : 'min-h-[136px]'}`}
    >
      <View className="flex-row items-start gap-3 mb-3">
        {userAvatar && (
          <Image
            source={
              typeof userAvatar === 'string' ? { uri: userAvatar } : userAvatar
            }
            className="w-10 h-10 rounded-full"
            resizeMode="cover"
            accessibilityLabel={`${userName}のアバター画像`}
            accessibilityRole="image"
          />
        )}
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="text-subhead text-text-primary">{userName}</Text>
            <Text className="text-caption-2 text-neutral-200">{date}</Text>
          </View>
          <View className="flex-row gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Text
                key={`star-${index}`}
                className={`text-caption-1 ${
                  index < validRating ? 'text-primary-500' : 'text-neutral-50'
                }`}
              >
                ★
              </Text>
            ))}
          </View>
        </View>
      </View>

      <Text className="text-body text-text-primary mb-3">{comment}</Text>

      {likes !== undefined && likes > 0 && (
        <View className="flex-row items-center gap-1 mb-3">
          <Text className="text-caption-1 text-primary-500">♥</Text>
          <Text className="text-caption-2 text-neutral-200">{likes} likes</Text>
        </View>
      )}

      {hasImages && (
        <View className="flex-row gap-2">
          {images.slice(0, 5).map((image, index) => {
            const imageSource =
              typeof image === 'string' ? { uri: image } : image;
            const imageKey =
              typeof image === 'string' ? image : `image-${index}`;
            const isLastImage = index === 4 && images.length > 5;
            return (
              <View key={imageKey} className="relative flex-1 aspect-square">
                <Image
                  source={imageSource}
                  className="w-full h-full rounded-lg"
                  resizeMode="cover"
                  accessibilityLabel={`レビュー画像 ${index + 1}`}
                  accessibilityRole="image"
                />
                {isLastImage && (
                  <View className="absolute inset-0 bg-neutral-900/60 rounded-lg items-center justify-center">
                    <Text className="text-white text-subhead">
                      +{images.length - 5}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}
