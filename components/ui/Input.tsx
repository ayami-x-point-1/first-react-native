import { View, TextInput, TextInputProps, Text } from 'react-native';
import { ReactNode } from 'react';

type InputProps = TextInputProps & {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
};

export function Input({ label, leftIcon, rightIcon, error, ...props }: InputProps) {
  return (
    <View className="gap-2">
      {label && (
        <Text className="text-subhead text-text-primary">
          {label}
        </Text>
      )}
      <View className="flex-row items-center h-11 rounded-xl bg-neutral-30 px-4 gap-2">
        {leftIcon && <View>{leftIcon}</View>}
        <TextInput
          className="flex-1 text-body text-text-primary"
          placeholderTextColor="#A5ADBA"
          {...props}
        />
        {rightIcon && <View>{rightIcon}</View>}
      </View>
      {error && (
        <Text className="text-caption-2 text-red-500">
          {error}
        </Text>
      )}
    </View>
  );
}
