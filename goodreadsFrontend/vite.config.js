import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: {
      Components: '/src/Components',
      Pages: '/src/Pages',
      Configs: '/src/Configs',
      Assests: '/src/Assets',
      Layouts: '/src/Layouts',
      Redux: '/src/Redux',
      Helpers: '/src/Helpers',
      Routes: '/src/Routes',
    },
  },
});
