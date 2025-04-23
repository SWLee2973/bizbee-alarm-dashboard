// eslint.config.mjs
import js from '@eslint/js';
import next from 'eslint-plugin-next';
import globals from 'globals';

// TS용 파서 & 플러그인 불러오기
const tsParser = await import('@typescript-eslint/parser');
const tsPlugin = await import('@typescript-eslint/eslint-plugin');
const prettierPlugin = await import('eslint-plugin-prettier');

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  // 1) JS 기본 권장 설정
  js.configs.recommended,

  // 2) Next.js 권장 설정
  next.configs.recommended,

  // 3) TS + Prettier + 공통 룰
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,     // TS 파서
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // TS 플러그인 추천 룰
      ...tsPlugin.configs.recommended.rules,
      // Prettier 경고
      'prettier/prettier': 'warn',
      // (추가로 커스텀 룰이 필요하면 여기에)
    },
  },

  // 4) 빌드 출력물 제외
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**'],
  },
];
