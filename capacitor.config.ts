import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.apexduel.ultimate',
  appName: 'Apex Duel: Ultimate Edition',
  webDir: 'dist',
  server: { androidScheme: 'https' },
  android: {
    backgroundColor: '#0b0f17',
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
};
export default config;