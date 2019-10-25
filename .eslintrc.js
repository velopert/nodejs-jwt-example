module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 4],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': 0
  }
};
