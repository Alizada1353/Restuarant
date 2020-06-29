module.exports = {
  parserOptions: {
    sourceType: "script",
  },
  env: {
    browser: true,
    jquery: true,
    node: false,
  },
  rules: {
    "no-multiple-empty-lines": "warn",
    "no-var": "off",
    "prefer-const": "off",
  },
};
