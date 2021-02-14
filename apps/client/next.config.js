const { dependencies } = require('./package.json');

const monorepoPackageNames = Object.keys(dependencies).filter((dependencyName) => dependencyName.includes('@sn/'));

const withTM = require('next-transpile-modules')(monorepoPackageNames);

module.exports = withTM({
  reactStrictMode: true,
});
