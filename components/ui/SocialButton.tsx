import { Pressable, Text, PressableProps } from 'react-native';
import { ReactNode, ReactElement } from 'react';

type SocialProvider = 'facebook' | 'google';

type SocialButtonProps = PressableProps & {
  provider: SocialProvider;
  icon?: ReactNode;
};

export function SocialButton({ provider, icon, ...props }: SocialButtonProps): ReactElement {
  const isFacebook = provider === 'facebook';
  const isGoogle = provider === 'google';

  const label = isFacebook ? 'Facebookで続ける' : 'Googleで続ける';
  const bgColor = isFacebook ? 'bg-[#1877F2]' : 'bg-white';
  const textColor = isFacebook ? 'text-white' : 'text-text-primary';
  const borderColor = isGoogle ? 'border border-neutral-40' : '';

  return (
    <Pressable
      className={`h-12 rounded-lg flex-row items-center justify-center gap-2 ${bgColor} ${borderColor}`}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={(state) => ({
        opacity: state.pressed ? 0.7 : 1,
      })}
      {...props}
    >
      {icon}
      <Text className={`text-body font-dm-sans-medium ${textColor}`}>
        {label}
      </Text>
    </Pressable>
  );
}
