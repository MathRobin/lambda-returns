import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import eslintPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['.idea/*', '.yarn/*', 'node_modules/*', 'coverage/*', 'dist/*'] },
  js.configs.recommended,
  eslintPrettier,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.js'],
    linterOptions: {
      noInlineConfig: true,
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ['@babel/plugin-syntax-import-assertions'],
        },
      },
    },
  },
];
