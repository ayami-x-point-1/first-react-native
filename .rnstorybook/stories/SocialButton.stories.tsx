import { SocialButton } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/SocialButton',
  component: SocialButton,
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    provider: {
      control: 'select',
      options: ['facebook', 'google'],
      description: 'ソーシャルログインのプロバイダー',
    },
  },
  args: {
    onPress: fn(),
  },
} satisfies Meta<typeof SocialButton>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのプロバイダーを一覧表示
 */
export const AllVariants: Story = {
  args: {
    provider: 'facebook',
  },
  render: () => (
    <View className="gap-4">
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Facebook</Text>
        <SocialButton
          provider="facebook"
          icon={<Text className="text-white text-lg">f</Text>}
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Google</Text>
        <SocialButton
          provider="google"
          icon={<Text className="text-lg">G</Text>}
          onPress={fn()}
        />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Facebook (アイコンなし)</Text>
        <SocialButton provider="facebook" onPress={fn()} />
      </View>
      <View>
        <Text className="text-neutral-900 mb-2 text-sm">Google (アイコンなし)</Text>
        <SocialButton provider="google" onPress={fn()} />
      </View>
    </View>
  ),
};

/**
 * Facebook - Facebookログインボタン
 */
export const Facebook: Story = {
  args: {
    provider: 'facebook',
  },
  render: (args) => (
    <SocialButton
      {...args}
      icon={<Text className="text-white text-lg">f</Text>}
      onPress={fn()}
    />
  ),
};

/**
 * Google - Googleログインボタン
 */
export const Google: Story = {
  args: {
    provider: 'google',
  },
  render: (args) => (
    <SocialButton
      {...args}
      icon={<Text className="text-lg">G</Text>}
      onPress={fn()}
    />
  ),
};

/**
 * Facebookアイコン付き
 */
export const FacebookWithIcon: Story = {
  args: {
    provider: 'facebook',
  },
  render: (args) => (
    <SocialButton
      {...args}
      icon={
        <View className="w-5 h-5 items-center justify-center bg-white rounded-full">
          <Text className="text-[#1877F2] text-sm font-bold">f</Text>
        </View>
      }
      onPress={fn()}
    />
  ),
};

/**
 * Googleアイコン付き
 */
export const GoogleWithIcon: Story = {
  args: {
    provider: 'google',
  },
  render: (args) => (
    <SocialButton
      {...args}
      icon={
        <View className="w-5 h-5 items-center justify-center">
          <Text className="text-base font-bold">G</Text>
        </View>
      }
      onPress={fn()}
    />
  ),
};

/**
 * アイコンなし
 */
export const WithoutIcon: Story = {
  args: {
    provider: 'facebook',
  },
};

/**
 * ログイン画面での使用例
 */
export const InLoginScreen: Story = {
  args: {
    provider: 'facebook',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-2">
          <Text className="text-neutral-900 text-2xl font-bold text-center">
            ログイン
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            アカウントにログインしてください
          </Text>
        </View>

        <View className="gap-3 mt-4">
          <SocialButton
            provider="facebook"
            icon={
              <View className="w-5 h-5 items-center justify-center bg-white rounded-full">
                <Text className="text-[#1877F2] text-sm font-bold">f</Text>
              </View>
            }
            onPress={fn()}
          />
          <SocialButton
            provider="google"
            icon={
              <View className="w-5 h-5 items-center justify-center">
                <Text className="text-base font-bold">G</Text>
              </View>
            }
            onPress={fn()}
          />
        </View>

        <View className="flex-row items-center gap-3 my-2">
          <View className="flex-1 h-px bg-neutral-100" />
          <Text className="text-neutral-400 text-sm">または</Text>
          <View className="flex-1 h-px bg-neutral-100" />
        </View>

        <View className="gap-3">
          <View className="gap-2">
            <Text className="text-neutral-600 text-sm">メールアドレス</Text>
            <View className="bg-neutral-30 p-3 rounded-lg">
              <Text className="text-neutral-400">example@email.com</Text>
            </View>
          </View>
          <View className="gap-2">
            <Text className="text-neutral-600 text-sm">パスワード</Text>
            <View className="bg-neutral-30 p-3 rounded-lg">
              <Text className="text-neutral-400">••••••••</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  ),
};

/**
 * サインアップ画面での使用例
 */
export const InSignupScreen: Story = {
  args: {
    provider: 'facebook',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-2">
          <Text className="text-neutral-900 text-2xl font-bold text-center">
            アカウント作成
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            ソーシャルアカウントで簡単に登録
          </Text>
        </View>

        <View className="gap-3 mt-4">
          <SocialButton
            provider="google"
            icon={
              <View className="w-5 h-5 items-center justify-center">
                <Text className="text-base font-bold">G</Text>
              </View>
            }
            onPress={fn()}
          />
          <SocialButton
            provider="facebook"
            icon={
              <View className="w-5 h-5 items-center justify-center bg-white rounded-full">
                <Text className="text-[#1877F2] text-sm font-bold">f</Text>
              </View>
            }
            onPress={fn()}
          />
        </View>

        <View className="flex-row items-center gap-3 my-2">
          <View className="flex-1 h-px bg-neutral-100" />
          <Text className="text-neutral-400 text-sm">または</Text>
          <View className="flex-1 h-px bg-neutral-100" />
        </View>

        <View className="bg-neutral-30 p-3 rounded-lg">
          <Text className="text-neutral-900 text-center">
            メールアドレスで登録
          </Text>
        </View>

        <Text className="text-neutral-500 text-xs text-center">
          登録することで、利用規約とプライバシーポリシーに同意したことになります
        </Text>
      </View>
    </View>
  ),
};

/**
 * 接続設定画面での使用例
 */
export const InAccountConnection: Story = {
  args: {
    provider: 'facebook',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-4 rounded-xl gap-3">
        <Text className="text-neutral-900 text-base font-semibold">
          アカウント連携
        </Text>
        <Text className="text-neutral-600 text-sm">
          ソーシャルアカウントと連携して、簡単にログインできます
        </Text>

        <View className="gap-3 mt-2">
          <View className="gap-2">
            <Text className="text-neutral-600 text-sm">Facebook</Text>
            <SocialButton
              provider="facebook"
              icon={
                <View className="w-5 h-5 items-center justify-center bg-white rounded-full">
                  <Text className="text-[#1877F2] text-sm font-bold">f</Text>
                </View>
              }
              onPress={fn()}
            />
          </View>

          <View className="gap-2">
            <Text className="text-neutral-600 text-sm">Google</Text>
            <SocialButton
              provider="google"
              icon={
                <View className="w-5 h-5 items-center justify-center">
                  <Text className="text-base font-bold">G</Text>
                </View>
              }
              onPress={fn()}
            />
          </View>
        </View>
      </View>
    </View>
  ),
};

/**
 * オンボーディング画面での使用例
 */
export const InOnboarding: Story = {
  args: {
    provider: 'facebook',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-neutral-0 p-6 rounded-xl gap-4">
        <View className="gap-3">
          <Text className="text-neutral-900 text-3xl font-bold text-center">
            ようこそ
          </Text>
          <Text className="text-neutral-600 text-base text-center">
            アカウントを作成して始めましょう
          </Text>
        </View>

        <View className="my-6 items-center">
          <View className="w-32 h-32 bg-neutral-200 rounded-full" />
        </View>

        <View className="gap-3">
          <SocialButton
            provider="google"
            icon={
              <View className="w-5 h-5 items-center justify-center">
                <Text className="text-base font-bold">G</Text>
              </View>
            }
            onPress={fn()}
          />
          <SocialButton
            provider="facebook"
            icon={
              <View className="w-5 h-5 items-center justify-center bg-white rounded-full">
                <Text className="text-[#1877F2] text-sm font-bold">f</Text>
              </View>
            }
            onPress={fn()}
          />
        </View>

        <View className="mt-2">
          <Text className="text-neutral-500 text-xs text-center">
            続行することで、利用規約に同意したことになります
          </Text>
        </View>
      </View>
    </View>
  ),
};

/**
 * 縦並び配置
 */
export const VerticalLayout: Story = {
  args: {
    provider: 'facebook',
  },
  render: () => (
    <View className="gap-3">
      <SocialButton
        provider="google"
        icon={
          <View className="w-5 h-5 items-center justify-center">
            <Text className="text-base font-bold">G</Text>
          </View>
        }
        onPress={fn()}
      />
      <SocialButton
        provider="facebook"
        icon={
          <View className="w-5 h-5 items-center justify-center bg-white rounded-full">
            <Text className="text-[#1877F2] text-sm font-bold">f</Text>
          </View>
        }
        onPress={fn()}
      />
    </View>
  ),
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {
    provider: 'facebook',
  },
};
