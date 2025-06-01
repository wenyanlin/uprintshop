import pluginJs from '@eslint/js';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import autoImportConfig from './.eslintrc-auto-import.json';

export default [
  // 1. 全局忽略配置
  {
    ignores: ['node_modules/', 'dist/', 'public/', '*.log'],
  },

  // 2. ESLint 官方推薦的 JavaScript 規則
  pluginJs.configs.recommended,

  // 3. Vue 3 相關規則配置
  ...pluginVue.configs['flat/strongly-recommended'],

  // 4. 針對所有 .js 和 .vue 文件的細化配置
  {
    files: ['**/*.{js,mjs,cjs,vue}'], // 確保應用到 JS 和 Vue 文件
    languageOptions: {
      globals: {
        ...(autoImportConfig.globals || {}), // 合併 globals
        ...globals.browser, // 瀏覽器環境全局變量
        ...globals.node, // Node.js 環境全局變量 (如果您有 Node.js 腳本)
      },
      ecmaVersion: 'latest', // 使用最新的 ECMAScript 標準
      sourceType: 'module', // 使用 ES 模塊
      parserOptions: {
        // 這些選項會被 vue-eslint-parser 和默認 JS parser 使用
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // 在這裡添加或覆蓋您的項目特定規則
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 未使用變量警告，忽略下劃線開頭的
    },
  },

  // 5. Prettier 相關配置
  // eslint-plugin-prettier/recommended 會做三件事:
  //   a. 啟用 eslint-plugin-prettier 插件
  //   b. 將 prettier/prettier 規則設為 "error"
  //   c. 擴展 eslint-config-prettier
  prettierPluginRecommended,
];
