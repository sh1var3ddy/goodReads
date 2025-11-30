import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist']),

  // 1) Frontend source files (browser)
  {
    files: ['src/**/*.{js,jsx}', 'src/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'semi': ['error', 'always'], // semicolons in src
    },
  },

  // 2) Node config files (Node env, ESM)
  {
    files: ['eslint.config.js', 'tailwind.config.js', 'vite.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',   // ✅ fix here
      globals: globals.node,
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'semi': ['error', 'always'], // semicolons here too if you want
    },
  },
]);
