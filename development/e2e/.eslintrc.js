const { createEslintConfig } = require('@sn/config/eslint');

module.exports = createEslintConfig({
  dirname: __dirname,
  tsConfigFile: 'tsconfig.eslint.json',
  env: {
    node: true,
    'cypress/globals': true,
  },
  plugins: ['cypress'],
  extends: ['plugin:cypress/recommended'],
  rules: {
    'jest/valid-expect': 0, // in cypress environment we have an extended expect instance
  },
});
