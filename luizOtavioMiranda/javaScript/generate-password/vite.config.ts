// vite.config.ts
import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
});