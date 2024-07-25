import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, './src'),
    },
  },
});
