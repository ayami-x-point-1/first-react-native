import { View, Pressable, Text } from 'react-native';
import { ReactNode } from 'react';

type TabBarItemProps = {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  hasNotification?: boolean;
  onPress?: () => void;
};

export function TabBarItem({
  icon,
  label,
  isActive = false,
  hasNotification = false,
  onPress,
}: TabBarItemProps) {
  return (
    <Pressable
      className="flex-1 items-center justify-center py-2 relative"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: isActive }}
      accessibilityHint={hasNotification ? '通知があります' : undefined}
    >
      <View className="relative">
        <View className={isActive ? 'opacity-100' : 'opacity-50'}>
          {icon}
        </View>
        {hasNotification && (
          <View className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full" />
        )}
      </View>
      <Text
        className={`text-caption-2 mt-1 ${
          isActive ? 'text-primary-500' : 'text-neutral-200'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

type TabBarProps = {
  children: ReactNode;
};

export function TabBar({ children }: TabBarProps) {
  return (
    <View className="flex-row bg-white border-t border-neutral-40 h-[88px] pb-8">
      {children}
    </View>
  );
}
