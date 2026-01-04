import { View, TextInput, TextInputProps } from 'react-native';
import { useRef, useState } from 'react';

type CodeInputProps = Omit<TextInputProps, 'maxLength'> & {
  length?: number;
  onComplete?: (code: string) => void;
};

export function CodeInput({ length = 4, onComplete, ...props }: CodeInputProps) {
  const [code, setCode] = useState('');
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChangeText = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setCode(numericText);

    if (numericText.length === length && onComplete) {
      onComplete(numericText);
    }
  };

  return (
    <View className="flex-row gap-3">
      {Array.from({ length }).map((_, index) => {
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
                ref={(ref) => (inputRefs.current[0] = ref)}
                className="absolute opacity-0"
                keyboardType="number-pad"
                maxLength={length}
                value={code}
                onChangeText={handleChangeText}
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
