import { View, Text, Pressable, PressableProps, Switch } from 'react-native';
import { ReactNode } from 'react';

type ListItemVariant = 'icon-text' | 'icon-text-with-icons' | 'setting-icon' | 'setting-toggle';

type ListItemProps = PressableProps & {
  variant?: ListItemVariant;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  rightIcon?: ReactNode;
  rightText?: string;
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
};

export function ListItem({
  variant = 'icon-text',
  icon,
  title,
  subtitle,
  rightIcon,
  rightText,
  toggleValue = false,
  onToggleChange,
  ...props
}: ListItemProps) {
  const hasSubtitle = variant === 'setting-icon' || variant === 'setting-toggle';

  return (
    <Pressable
      className={`flex-row items-center px-4 ${
        hasSubtitle ? 'py-3 min-h-[66px]' : 'h-11'
      } bg-white`}
      {...props}
    >
      {icon && <View className="mr-3">{icon}</View>}

      <View className="flex-1">
        <Text className="text-body text-text-primary">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-caption-2 text-neutral-200 mt-1">
            {subtitle}
          </Text>
        )}
      </View>

      {variant === 'setting-toggle' && onToggleChange ? (
        <Switch
          value={toggleValue}
          onValueChange={onToggleChange}
          trackColor={{ false: '#C1C7D0', true: '#FF8B00' }}
          thumbColor="#FFFFFF"
        />
      ) : rightText ? (
        <Text className="text-caption-1 text-neutral-200">
          {rightText}
        </Text>
      ) : rightIcon ? (
        <View>{rightIcon}</View>
      ) : null}
    </Pressable>
  );
}
