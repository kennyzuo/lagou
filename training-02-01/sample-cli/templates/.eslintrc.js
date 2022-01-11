module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ["error", {
      "endOfLine":"auto"
    }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'semi': 0,
    "no-mixed-spaces-and-tabs": [0],
    "next-line": [0]
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  }
}