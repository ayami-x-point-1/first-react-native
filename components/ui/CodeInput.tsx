import { View, TextInput, TextInputProps } from 'react-native';
import { useState, useCallback, ReactElement } from 'react';

type CodeInputProps = Omit<TextInputProps, 'maxLength'> & {
  length?: number;
  onComplete?: (code: string) => void;
};

export function CodeInput({ length = 4, onComplete, ...props }: CodeInputProps): ReactElement {
  const validLength = Math.max(1, length);
  const [code, setCode] = useState('');

  const handleChangeText = useCallback((text: string): void => {
    const numericText = text.replace(/[^0-9]/g, '');
    setCode(numericText);

    if (numericText.length === validLength && onComplete) {
      onComplete(numericText);
    }
  }, [validLength, onComplete]);

  return (
    <View className="flex-row gap-3">
      {Array.from({ length: validLength }).map((_, index) => {
        const digit = code[index] || '';
        const isFilled = digit !== '';

        return (
          <View
            key={index}
            className={`w-[65px] h-[65px] rounded-2xl items-center justify-center ${
              isFilled ? 'bg-primary-500' : 'bg-neutral-30'
            }`}
          >
            {index === 0 && (
              <TextInput
                className="absolute opacity-0"
                keyboardType="number-pad"
                maxLength={validLength}
                value={code}
                onChangeText={handleChangeText}
                accessibilityLabel="認証コード入力"
                accessibilityHint={`${validLength}桁の数字を入力してください`}
                accessibilityLiveRegion="polite"
                {...props}
              />
            )}
            {isFilled && (
              <View className="w-3 h-3 rounded-full bg-white" />
            )}
          </View>
        );
      })}
    </View>
  );
}
