import { View, Text, Pressable, PressableProps } from 'react-native';

type DropdownVariant = 'light' | 'dark';

type DropdownProps = PressableProps & {
  variant?: DropdownVariant;
  placeholder?: string;
  value?: string;
};

export function Dropdown({
  variant = 'light',
  placeholder = 'Select an option',
  value,
  ...props
}: DropdownProps) {
  const isLight = variant === 'light';
  const isDark = variant === 'dark';

  return (
    <Pressable
      className={`h-10 rounded-lg px-4 flex-row items-center justify-between ${
        isLight ? 'bg-neutral-30' : isDark ? 'bg-neutral-400' : ''
      }`}
      {...props}
    >
      <Text className={`text-body ${
        isLight ? 'text-neutral-200' : isDark ? 'text-white' : ''
      }`}>
        {value || placeholder}
      </Text>
      <Text className={`text-body ${
        isLight ? 'text-neutral-200' : isDark ? 'text-white' : ''
      }`}>
        ▼
      </Text>
    </Pressable>
  );
}
