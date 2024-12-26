// filepath: /c:/Users/fc12/Documents/code/forli-consulting-website/forli-consulting-website/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/forli-consulting-website/', // Set the base path to the repository name
});