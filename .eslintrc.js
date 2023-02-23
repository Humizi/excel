module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.json",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "max-len": ["error", { code: 140 }],
    "linebreak-style": ["error", "windows"],
    semi: "off",
    "comma-dangle": "off",
    "object-curly-spacing": ["error", "always", { arraysInObjects: true }],
    "quote-props": ["error", "as-needed"],
    quotes: 0,
    "require-jsdoc": 0,
    "operator-linebreak": 0,
    "no-debugger": 0,
    indent: 0,
    "no-tabs": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    "spaced-comment": 0
  },
};
