const { createEslintConfig } = require('@sn/config');

module.exports = createEslintConfig({
  dirname: __dirname,
  tsConfigFile: 'tsconfig.eslint.json',
});
