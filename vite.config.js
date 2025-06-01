import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path, { dirname } from 'path'; // 引入 path, dirname, resolve
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath } from 'url'; // 引入 fileURLToPath
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import Components from 'unplugin-vue-components/vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      // resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ 指向 src 目錄
    },
  },
  server: {
    historyApiFallback: false,
    host: '0.0.0.0',
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://www.uprintshop.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('error', (err, req, res) => {
            console.log('代理錯誤:', err);
          });
        },
      },
    },
  },
});
