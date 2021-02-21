const withTranspileModules = require('next-transpile-modules');
const withNextTranslate = require('next-translate');
const { dependencies } = require('./package.json');

const monorepoPackageNames = Object.keys(dependencies).filter((dependencyName) => dependencyName.includes('@sn/'));

module.exports = withNextTranslate(
  withTranspileModules(monorepoPackageNames)({
    reactStrictMode: true,
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
  }),
);
