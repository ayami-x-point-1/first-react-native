import { View, TextInput, TextInputProps, Text } from 'react-native';
import { ReactNode, useState } from 'react';

type InputProps = TextInputProps & {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
};

const PLACEHOLDER_COLOR = '#A5ADBA'; // neutral-70

export function Input({ label, leftIcon, rightIcon, error, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="gap-2">
      {label && (
        <Text className="text-subhead text-text-primary">
          {label}
        </Text>
      )}
      <View className={`flex-row items-center h-11 rounded-xl bg-neutral-30 px-4 gap-2 ${
        isFocused ? 'border-2 border-primary-500' : 'border-2 border-transparent'
      }`}>
        {leftIcon && <View>{leftIcon}</View>}
        <TextInput
          className="flex-1 text-body text-text-primary"
          placeholderTextColor={PLACEHOLDER_COLOR}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          accessibilityLabel={label}
          accessibilityState={{ disabled: props.editable === false }}
          {...props}
        />
        {rightIcon && <View>{rightIcon}</View>}
      </View>
      {error && (
        <Text
          className="text-caption-2 text-primary-500"
          accessibilityLiveRegion="polite"
        >
          {error}
        </Text>
      )}
    </View>
  );
}
