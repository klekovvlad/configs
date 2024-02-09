import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      // ['/wp-json']: {
      //   target: 'https://megafilmbe.klekovvlad.ru',
      //   changeOrigin: true,
      //   secure: false,
      // },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@ui': path.resolve(__dirname, './src/ui'),
      '@ui/icons': path.resolve(__dirname, './src/ui/icons'),
    },
  },
});
