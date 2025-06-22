module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended', // Enforce best practices for React hooks
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'simple-import-sort',
    'react-hooks', // Added for React hooks linting
  ],
  env: {
    'react-native/react-native': true,
    node: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js or React 18+ handles this
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Allow unused args with underscore
    'react/prop-types': 'off', // React Prop Types not needed with TypeScript
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['useSelector', 'useDispatch'],
            message:
              'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
          },
        ],
      },
    ],
    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error', // Ensures hooks are used correctly
    'react-hooks/exhaustive-deps': 'warn', // Warns on missing hook dependencies

    // TypeScript Specific Enhancements
    '@typescript-eslint/explicit-module-boundary-types': 'off', // You can enable this if you want strict function signatures
    '@typescript-eslint/ban-ts-comment': 'warn', // Warns when TypeScript comments are used
    '@typescript-eslint/explicit-function-return-type': 'off', // Allow flexibility with return types

    // Enforce consistent code style and improve performance
    'no-magic-numbers': 'off',
    'consistent-return': 'error',
    'no-duplicate-imports': 'error', // Enforce single import per module

    // Additional React and JSX-specific improvements
    'react/jsx-sort-props': ['error', { callbacksLast: true }], // Sort props for readability
    'react/jsx-no-useless-fragment': 'warn', // Avoid unnecessary fragments
  },
};
