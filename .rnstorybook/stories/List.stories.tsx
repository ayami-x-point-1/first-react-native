import { ListItem } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/List',
  component: ListItem,
  decorators: [
    (Story) => (
      <ScrollView className="bg-neutral-0" contentContainerClassName="p-4">
        <Story />
      </ScrollView>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'icon-text',
        'icon-text-with-icons',
        'setting-icon',
        'setting-toggle',
      ],
      description: 'リストアイテムのスタイルバリアント',
    },
    title: {
      control: 'text',
      description: 'リストアイテムのタイトル',
    },
    subtitle: {
      control: 'text',
      description: 'サブタイトル（setting-icon、setting-toggleで使用）',
    },
    rightText: {
      control: 'text',
      description: '右側に表示するテキスト',
    },
    toggleValue: {
      control: 'boolean',
      description: 'トグルの状態（setting-toggleで使用）',
    },
  },
  args: {
    onPress: fn(),
    onToggleChange: fn(),
  },
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * すべてのバリアントを一覧表示
 */
export const AllVariants: Story = {
  args: {
    variant: 'icon-text',
    title: 'リストアイテム',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-white overflow-hidden">
        <Text className="text-neutral-900 mb-2 text-sm px-4 pt-2">
          Icon Text
        </Text>
        <ListItem
          variant="icon-text"
          icon={<Text className="text-xl">🏠</Text>}
          title="ホーム"
          onPress={fn()}
        />
      </View>

      <View className="bg-white overflow-hidden">
        <Text className="text-neutral-900 mb-2 text-sm px-4 pt-2">
          Icon Text with Icons
        </Text>
        <ListItem
          variant="icon-text-with-icons"
          icon={<Text className="text-xl">📧</Text>}
          title="メッセージ"
          rightIcon={<Text className="text-neutral-400">→</Text>}
          onPress={fn()}
        />
      </View>

      <View className="bg-white overflow-hidden">
        <Text className="text-neutral-900 mb-2 text-sm px-4 pt-2">
          Setting Icon
        </Text>
        <ListItem
          variant="setting-icon"
          icon={<Text className="text-xl">⚙️</Text>}
          title="アカウント設定"
          subtitle="プロフィールとセキュリティ"
          rightIcon={<Text className="text-neutral-400">→</Text>}
          onPress={fn()}
        />
      </View>

      <View className="bg-white overflow-hidden">
        <Text className="text-neutral-900 mb-2 text-sm px-4 pt-2">
          Setting Toggle
        </Text>
        <ListItem
          variant="setting-toggle"
          icon={<Text className="text-xl">🔔</Text>}
          title="通知"
          subtitle="プッシュ通知を受け取る"
          toggleValue={true}
          onToggleChange={fn()}
        />
      </View>
    </View>
  ),
};

/**
 * Icon Text - アイコンとテキスト
 */
export const IconText: Story = {
  args: {
    variant: 'icon-text',
    title: 'ホーム',
  },
  render: (args) => (
    <View className="bg-white overflow-hidden">
      <ListItem
        {...args}
        icon={<Text className="text-xl">🏠</Text>}
        onPress={fn()}
      />
    </View>
  ),
};

/**
 * Icon Text with Icons - アイコンとテキストと右アイコン
 */
export const IconTextWithIcons: Story = {
  args: {
    variant: 'icon-text-with-icons',
    title: 'メッセージ',
  },
  render: (args) => (
    <View className="bg-white overflow-hidden">
      <ListItem
        {...args}
        icon={<Text className="text-xl">📧</Text>}
        rightIcon={<Text className="text-neutral-400">→</Text>}
        onPress={fn()}
      />
    </View>
  ),
};

/**
 * Setting Icon - 設定項目（アイコン付き）
 */
export const SettingIcon: Story = {
  args: {
    variant: 'setting-icon',
    title: 'アカウント設定',
    subtitle: 'プロフィールとセキュリティ',
  },
  render: (args) => (
    <View className="bg-white overflow-hidden">
      <ListItem
        {...args}
        icon={<Text className="text-xl">⚙️</Text>}
        rightIcon={<Text className="text-neutral-400">→</Text>}
        onPress={fn()}
      />
    </View>
  ),
};

/**
 * Setting Toggle - 設定項目（トグル付き）
 */
export const SettingToggle: Story = {
  args: {
    variant: 'setting-toggle',
    title: '通知',
    subtitle: 'プッシュ通知を受け取る',
    toggleValue: true,
  },
  render: (args) => (
    <View className="bg-white overflow-hidden">
      <ListItem
        {...args}
        icon={<Text className="text-xl">🔔</Text>}
        onToggleChange={fn()}
      />
    </View>
  ),
};

/**
 * 右側テキスト付き
 */
export const WithRightText: Story = {
  args: {
    variant: 'icon-text-with-icons',
    title: '言語',
  },
  render: (args) => (
    <View className="bg-white overflow-hidden">
      <ListItem
        {...args}
        icon={<Text className="text-xl">🌐</Text>}
        rightText="日本語"
        onPress={fn()}
      />
    </View>
  ),
};

/**
 * アイコンなし
 */
export const WithoutIcon: Story = {
  args: {
    variant: 'icon-text',
    title: 'テキストのみ',
  },
  render: (args) => (
    <View className="bg-white overflow-hidden">
      <ListItem {...args} onPress={fn()} />
    </View>
  ),
};

/**
 * メニュー画面での使用例
 */
export const InMenu: Story = {
  args: {
    variant: 'icon-text',
    title: 'リストアイテム',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-white overflow-hidden">
        <Text className="text-neutral-900 text-base font-semibold px-4 py-3">
          メインメニュー
        </Text>
        <View className="gap-3">
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">🏠</Text>}
            title="ホーム"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">👤</Text>}
            title="プロフィール"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">⚙️</Text>}
            title="設定"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">❓</Text>}
            title="ヘルプ"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * 設定画面での使用例
 */
export const InSettings: Story = {
  args: {
    variant: 'setting-icon',
    title: 'リストアイテム',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-white overflow-hidden">
        <Text className="text-neutral-900 text-base font-semibold px-4 py-3">
          設定
        </Text>
        <View className="gap-3">
          <ListItem
            variant="setting-icon"
            icon={<Text className="text-xl">👤</Text>}
            title="アカウント"
            subtitle="プロフィール、メールアドレス"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
          <ListItem
            variant="setting-icon"
            icon={<Text className="text-xl">🔒</Text>}
            title="プライバシー"
            subtitle="データとセキュリティ"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
          <ListItem
            variant="setting-toggle"
            icon={<Text className="text-xl">🔔</Text>}
            title="通知"
            subtitle="プッシュ通知を受け取る"
            toggleValue={true}
            onToggleChange={fn()}
          />
          <ListItem
            variant="setting-toggle"
            icon={<Text className="text-xl">🌙</Text>}
            title="ダークモード"
            subtitle="ダークテーマを使用"
            toggleValue={false}
            onToggleChange={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * 言語・地域設定での使用例
 */
export const InLanguageSettings: Story = {
  args: {
    variant: 'icon-text-with-icons',
    title: 'リストアイテム',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-white overflow-hidden">
        <Text className="text-neutral-900 text-base font-semibold px-4 py-3">
          言語と地域
        </Text>
        <View className="gap-3">
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">🌐</Text>}
            title="言語"
            rightText="日本語"
            onPress={fn()}
          />
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">🗺️</Text>}
            title="地域"
            rightText="日本"
            onPress={fn()}
          />
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">🕐</Text>}
            title="タイムゾーン"
            rightText="JST (UTC+9)"
            onPress={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * プロフィール画面での使用例
 */
export const InProfile: Story = {
  args: {
    variant: 'icon-text-with-icons',
    title: 'リストアイテム',
  },
  render: () => (
    <View className="gap-4">
      <View className="bg-white overflow-hidden">
        <View className="items-center py-6 px-4">
          <View className="w-20 h-20 bg-neutral-200 rounded-full mb-3" />
          <Text className="text-neutral-900 text-lg font-semibold">
            山田 太郎
          </Text>
          <Text className="text-neutral-600 text-sm">yamada@example.com</Text>
        </View>
        <View className="gap-3">
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">✏️</Text>}
            title="プロフィールを編集"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">🔑</Text>}
            title="パスワードを変更"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
          <ListItem
            variant="icon-text-with-icons"
            icon={<Text className="text-xl">🚪</Text>}
            title="ログアウト"
            rightIcon={<Text className="text-neutral-400">→</Text>}
            onPress={fn()}
          />
        </View>
      </View>
    </View>
  ),
};

/**
 * 通知設定画面での使用例
 */
export const InNotificationSettings: Story = {
  args: {
    variant: 'setting-toggle',
    title: 'リストアイテム',
  },
  render: function NotificationSettingsExample() {
    const [emailNotification, setEmailNotification] = useState(true);
    const [pushNotification, setPushNotification] = useState(true);
    const [sound, setSound] = useState(false);
    const [vibration, setVibration] = useState(false);

    return (
      <View className="gap-4">
        <View className="bg-white overflow-hidden">
          <Text className="text-neutral-900 text-base font-semibold px-4 py-3">
            通知設定
          </Text>
          <View className="gap-3">
            <ListItem
              variant="setting-toggle"
              icon={<Text className="text-xl">📧</Text>}
              title="メール通知"
              subtitle="新着メッセージをメールで受け取る"
              toggleValue={emailNotification}
              onToggleChange={setEmailNotification}
            />
            <ListItem
              variant="setting-toggle"
              icon={<Text className="text-xl">🔔</Text>}
              title="プッシュ通知"
              subtitle="アプリ内の通知を受け取る"
              toggleValue={pushNotification}
              onToggleChange={setPushNotification}
            />
            <ListItem
              variant="setting-toggle"
              icon={<Text className="text-xl">🔊</Text>}
              title="サウンド"
              subtitle="通知音を再生する"
              toggleValue={sound}
              onToggleChange={setSound}
            />
            <ListItem
              variant="setting-toggle"
              icon={<Text className="text-xl">📳</Text>}
              title="バイブレーション"
              subtitle="通知時に振動する"
              toggleValue={vibration}
              onToggleChange={setVibration}
            />
          </View>
        </View>
      </View>
    );
  },
};

/**
 * Playground - インタラクティブに操作可能
 */
export const Playground: Story = {
  args: {
    variant: 'icon-text',
    title: 'リストアイテム',
    subtitle: '',
    rightText: '',
    toggleValue: false,
  },
};
