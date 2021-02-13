const { createEslintConfig } = require('./src/eslint');

module.exports = createEslintConfig({
  dirname: __dirname,
  tsConfigFile: 'tsconfig.eslint.json',
});
