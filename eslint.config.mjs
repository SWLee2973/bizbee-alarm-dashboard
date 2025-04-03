// eslint.config.mjs
import js from '@eslint/js';
import next from 'eslint-plugin-next';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  js.configs.recommended, // JS 기본 권장 설정
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: await import('@typescript-eslint/parser'), // TS 파서 추가 (TSX 지원)
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': await import('@typescript-eslint/eslint-plugin'),
      prettier: await import('eslint-plugin-prettier'),
      next,
    },
    rules: {
      // TypeScript 관련 추천 규칙 사용
      ...((await import('@typescript-eslint/eslint-plugin')).configs.recommended.rules),
      // Next.js 권장 규칙 사용
      ...next.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**'],
  },
];
