module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:/prettier/react/recommended',
    'react-app',
    'react-app/jest',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Integração do Prettier
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier', // Plugin do Prettier
  ],
  rules: {
    'react/display-name': 'warn',
    'prettier/prettier': 'error', // Garante que o Prettier seja aplicado como regra
  },
};
