module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
    // TypeScript 特定规则
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^h$',
        argsIgnorePattern: '^_',
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // React 特定规则（因为 Stencil 使用 JSX）
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',

    // 通用规则
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-alert': 'error',
    'prefer-const': 'warn',
    'no-var': 'error',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['**/*.component.tsx', '**/components/**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
    {
      files: ['*.spec.ts', '*.e2e.ts', '*.test.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'off',
      },
    },
  ],
};
