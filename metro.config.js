const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

module.exports = withStorybook(
  withNativeWind(config, {
    input: './global.css',
    resolver: {
      extraNodeModules: {
        '@': path.resolve(__dirname), // プロジェクトルートを指定
      },
    },
  }),
  {
    enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  }
);
