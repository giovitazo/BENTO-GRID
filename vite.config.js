// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Base URL for the project
  base: './', // This ensures that all paths are relative to the current HTML file's location
  build: {
    minify: 'esbuild',
  },
});