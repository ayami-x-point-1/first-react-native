import { ReactNode } from 'react';
import { Pressable, PressableProps, Switch, Text, View } from 'react-native';

type ListItemVariant =
  | 'icon-text'
  | 'icon-text-with-icons'
  | 'setting-icon'
  | 'setting-toggle';

const SWITCH_TRACK_COLOR_FALSE = '#C1C7D0'; // neutral-50
const SWITCH_TRACK_COLOR_TRUE = '#FF8B00'; // primary-500
const SWITCH_THUMB_COLOR = '#FFFFFF'; // neutral-0

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
  const hasSubtitle =
    variant === 'setting-icon' || variant === 'setting-toggle';
  const isToggle = variant === 'setting-toggle';
  const accessibilityLabel = `${title}${subtitle ? `, ${subtitle}` : ''}`;

  return (
    <Pressable
      className={`flex-row items-center px-4 rounded-2xl ${
        hasSubtitle ? 'py-3 min-h-[66px]' : 'py-3'
      } bg-neutral-42`}
      accessibilityRole={isToggle ? 'switch' : 'button'}
      accessibilityLabel={accessibilityLabel}
      accessibilityState={isToggle ? { checked: toggleValue } : undefined}
      {...props}
    >
      {icon && <View className="mr-3">{icon}</View>}

      <View className="flex-1">
        <Text className="text-body text-text-primary">{title}</Text>
        {subtitle && (
          <Text className="text-caption-2 text-neutral-200 mt-1">
            {subtitle}
          </Text>
        )}
      </View>

      {variant === 'setting-toggle' ? (
        <View>
          <Switch
            value={toggleValue}
            onValueChange={onToggleChange}
            trackColor={{
              false: SWITCH_TRACK_COLOR_FALSE,
              true: SWITCH_TRACK_COLOR_TRUE,
            }}
            thumbColor={SWITCH_THUMB_COLOR}
          />
        </View>
      ) : rightText ? (
        <Text className="text-caption-1 text-neutral-200">{rightText}</Text>
      ) : rightIcon ? (
        <View>{rightIcon}</View>
      ) : null}
    </Pressable>
  );
}
