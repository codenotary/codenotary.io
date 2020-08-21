module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
      indent: ["warn",4],
      "vue/html-indent": ["warn",4],
      "arrow-parens": ["warn", "always"],
      "vue/html-closing-bracket-spacing": "off",
      'semi': 'off',
      "no-multiple-empty-lines": 'off',
      "vue/order-in-components": 'off',
      "vue/html-closing-bracket-newline": 'off',
      "vue/singleline-html-element-content-newline": 'off',
      "vue/max-attributes-per-line": 'off',
      "space-before-function-paren": 'off'
  }
};
