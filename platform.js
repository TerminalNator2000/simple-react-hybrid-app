import { Platform } from 'react-native';

const platformMessage =
  Platform.OS === 'web' ? 'Running on the web!' : 'Running on mobile!';
