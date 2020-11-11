const { createEslintConfig } = require('@sn/config');

module.exports = createEslintConfig({
  dirname: __dirname,
  tsConfigFile: 'tsconfig.eslint.json',
  env: { browser: true },
  jsx: true,
  rules: {
    'react/react-in-jsx-scope': 0, // in Next.js we don't need to have React imports
    'jsx-a11y/anchor-is-valid': 0, // in Next.js we're providing href to Link instead of anchor element
  },
});
