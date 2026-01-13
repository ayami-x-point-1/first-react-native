import type { Preview } from '@storybook/react-native';
import '../global.css';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorageをStorybook環境でモック
if (typeof AsyncStorage !== 'object' || !AsyncStorage.getItem) {
  const mockAsyncStorage = {
    getItem: () => Promise.resolve(null),
    setItem: () => Promise.resolve(),
    removeItem: () => Promise.resolve(),
    clear: () => Promise.resolve(),
    getAllKeys: () => Promise.resolve([]),
    multiGet: () => Promise.resolve([]),
    multiSet: () => Promise.resolve(),
    multiRemove: () => Promise.resolve(),
  };

  // グローバルにモックを設定
  Object.assign(AsyncStorage, mockAsyncStorage);
}

const preview: Preview = {
  decorators: [(Story) => <Story />],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
