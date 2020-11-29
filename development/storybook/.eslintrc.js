const { createEslintConfig } = require('@sn/config');

module.exports = createEslintConfig({
  dirname: __dirname,
  env: { browser: true },
  tsConfigFile: 'tsconfig.eslint.json',
  jsx: true,
});
