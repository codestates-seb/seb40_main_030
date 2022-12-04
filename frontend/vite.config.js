import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), VitePluginHtmlEnv()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
