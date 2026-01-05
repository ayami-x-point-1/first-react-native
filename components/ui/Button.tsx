import { Pressable, PressableProps, Text } from 'react-native';

type ButtonVariant = 'primary' | 'outline';

type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  children: string;
};

export function Button({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';
  const { style: propsStyle, ...restProps } = props;

  return (
    <Pressable
      className={`h-11 rounded-[15px] justify-center items-center ${
        isPrimary
          ? 'bg-primary-500'
          : isOutline
            ? 'bg-transparent border-[1.5px] border-white'
            : ''
      }`}
      style={(state) => {
        const baseStyle =
          typeof propsStyle === 'function' ? propsStyle(state) : propsStyle;
        return [{ opacity: state.pressed ? 0.7 : 1 }, baseStyle];
      }}
      accessibilityRole="button"
      accessibilityLabel={children}
      {...restProps}
    >
      <Text className="text-body text-white text-center">{children}</Text>
    </Pressable>
  );
}
