import { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

type AppBarProps = {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftIconLabel?: string;
  rightIconLabel?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  variant?: 'default' | 'transparent';
};

export function AppBar({
  title,
  leftIcon,
  rightIcon,
  leftIconLabel,
  rightIconLabel,
  onLeftPress,
  onRightPress,
  variant = 'default',
}: AppBarProps) {
  const isTransparent = variant === 'transparent';

  return (
    <View
      className={`flex-row items-center justify-between h-14 px-4 ${
        isTransparent ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <View className="w-10">
        {leftIcon && (
          <Pressable
            onPress={onLeftPress}
            className="items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel={leftIconLabel}
          >
            {leftIcon}
          </Pressable>
        )}
      </View>

      <View className="flex-1">
        {title && (
          <Text className="text-headline text-text-primary text-center">
            {title}
          </Text>
        )}
      </View>

      <View className="w-10">
        {rightIcon && (
          <Pressable
            onPress={onRightPress}
            className="items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel={rightIconLabel}
          >
            {rightIcon}
          </Pressable>
        )}
      </View>
    </View>
  );
}
