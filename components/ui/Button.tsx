import { Pressable, Text, PressableProps } from 'react-native';

type ButtonVariant = 'primary' | 'outline';

type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  children: string;
};

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';

  return (
    <Pressable
      className={`h-11 rounded-[15px] justify-center items-center ${
        isPrimary ? 'bg-primary-500' : isOutline ? 'bg-primary-500 border-[1.5px] border-white' : ''
      }`}
      {...props}
    >
      <Text className="text-body text-white text-center">
        {children}
      </Text>
    </Pressable>
  );
}
