module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'react-app'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    'react/button-has-type': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
