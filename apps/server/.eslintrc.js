const { createEslintConfig } = require('@sn/config');

module.exports = createEslintConfig({
  dirname: __dirname,
  env: { node: true },
  tsConfigFile: 'tsconfig.eslint.json',
});
