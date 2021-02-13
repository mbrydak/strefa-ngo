const { createEslintConfig } = require('@sn/config/eslint');

module.exports = createEslintConfig({
  dirname: __dirname,
  tsConfigFile: 'tsconfig.eslint.json',
});
