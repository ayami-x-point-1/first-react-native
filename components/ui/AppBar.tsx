import { View, Text, Pressable, PressableProps } from 'react-native';
import { ReactNode } from 'react';

type AppBarProps = {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  variant?: 'default' | 'transparent';
};

export function AppBar({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  variant = 'default',
}: AppBarProps) {
  const isTransparent = variant === 'transparent';

  return (
    <View
      className={`flex-row items-center justify-between h-14 px-4 ${
        isTransparent ? 'bg-transparent' : 'bg-white border-b border-neutral-40'
      }`}
    >
      <View className="w-10">
        {leftIcon && (
          <Pressable onPress={onLeftPress} className="items-center justify-center">
            {leftIcon}
          </Pressable>
        )}
      </View>

      {title && (
        <Text className="text-headline text-text-primary flex-1 text-center">
          {title}
        </Text>
      )}

      <View className="w-10">
        {rightIcon && (
          <Pressable onPress={onRightPress} className="items-center justify-center">
            {rightIcon}
          </Pressable>
        )}
      </View>
    </View>
  );
}
