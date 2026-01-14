import { CodeInput } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/CodeInput',
  component: CodeInput,
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: 'number',
      description: 'コードの桁数',
    },
  },
  args: {
    onComplete: fn(),
  },
} satisfies Meta<typeof CodeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    length: 4,
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">4桁コード</Text>
        <CodeInput length={4} onComplete={fn()} />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">6桁コード</Text>
        <CodeInput length={6} onComplete={fn()} />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">8桁コード</Text>
        <CodeInput length={8} onComplete={fn()} />
      </View>
    </View>
  ),
};

/**
 * デフォルト4桁コード
 */
export const Default: Story = {
  args: {
    length: 4,
  },
};

/**
 * 6桁コード
 */
export const SixDigit: Story = {
  args: {
    length: 6,
  },
};

/**
 * 8桁コード
 */
export const EightDigit: Story = {
  args: {
    length: 8,
  },
};

/**
 * 入力完了時のコールバック
 */
export const WithOnComplete: Story = {
  args: {
    length: 4,
    onComplete: fn((code: string) => {
      console.log('入力完了:', code);
    }),
  },
};

/**
 * 認証画面での使用例
 */
export const InAuthScreen: Story = {
  args: {
    length: 4,
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-2">
          <Text className="text-neutral-900 text-2xl font-bold text-center">
            認証コードを入力
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            SMSで送信された4桁のコードを入力してください
          </Text>
        </View>

        <View className="items-center py-4">
          <CodeInput length={4} onComplete={fn()} />
        </View>

        <View className="gap-2">
          <Text className="text-neutral-600 text-sm text-center">
            コードが届いていませんか？
          </Text>
          <Text className="text-primary-500 text-sm text-center font-semibold">
            再送信する
          </Text>
        </View>
      </View>
    </View>
  ),
};

/**
 * 二段階認証での使用例
 */
export const InTwoFactorAuth: Story = {
  args: {
    length: 6,
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-2">
          <Text className="text-neutral-900 text-2xl font-bold text-center">
            二段階認証
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            認証アプリに表示されている6桁のコードを入力してください
          </Text>
        </View>

        <View className="items-center py-4">
          <CodeInput length={6} onComplete={fn()} />
        </View>

        <View className="mt-2">
          <Text className="text-neutral-500 text-xs text-center">
            認証アプリにアクセスできない場合は、バックアップコードを使用してください
          </Text>
        </View>
      </View>
    </View>
  ),
};

/**
 * PIN設定画面での使用例
 */
export const InPinSetup: Story = {
  args: {
    length: 4,
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-2">
          <Text className="text-neutral-900 text-2xl font-bold text-center">
            PINコードを設定
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            アプリのロック解除に使用する4桁のPINコードを入力してください
          </Text>
        </View>

        <View className="items-center py-4">
          <CodeInput length={4} onComplete={fn()} />
        </View>

        <View className="mt-2">
          <Text className="text-neutral-500 text-xs text-center">
            PINコードは忘れないように記録してください
          </Text>
        </View>
      </View>
    </View>
  ),
};

/**
 * 複数ステップでの使用例
 */
export const InMultiStep: Story = {
  args: {
    length: 4,
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-2">
          <View className="flex-row justify-center gap-2 mb-2">
            <View className="w-2 h-2 rounded-full bg-primary-500" />
            <View className="w-2 h-2 rounded-full bg-neutral-200" />
            <View className="w-2 h-2 rounded-full bg-neutral-200" />
          </View>
          <Text className="text-neutral-900 text-2xl font-bold text-center">
            ステップ 1/3
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            認証コードを入力してください
          </Text>
        </View>

        <View className="items-center py-4">
          <CodeInput length={4} onComplete={fn()} />
        </View>
      </View>
    </View>
  ),
};

/**
 * エラー状態の例（カスタマイズ用）
 */
export const WithErrorMessage: Story = {
  args: {
    length: 4,
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-2">
          <Text className="text-neutral-900 text-2xl font-bold text-center">
            認証コードを入力
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            SMSで送信された4桁のコードを入力してください
          </Text>
        </View>

        <View className="items-center py-4">
          <CodeInput length={4} onComplete={fn()} />
        </View>

        <View className="bg-red-50 p-3 rounded-lg">
          <Text className="text-red-600 text-sm text-center">
            コードが正しくありません。もう一度お試しください。
          </Text>
        </View>
      </View>
    </View>
  ),
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {
    length: 4,
  },
};
