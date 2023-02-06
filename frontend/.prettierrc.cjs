module.exports = {
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  tabWidth: 2,
  semi: true,
  endOfLine: 'auto',
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'import/export': 'off',
  },
};
