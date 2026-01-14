const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

// Metro の resolver 設定はトップレベルの config に定義する
config.resolver = {
  ...(config.resolver || {}),
  extraNodeModules: {
    ...((config.resolver && config.resolver.extraNodeModules) || {}),
    '@': path.resolve(__dirname), // プロジェクトルートを指定
  },
};

module.exports = withStorybook(
  withNativeWind(config, {
    input: './global.css',
  }),
  {
    enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  }
);
