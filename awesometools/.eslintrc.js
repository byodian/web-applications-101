module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  plugins: [],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
  },
};
