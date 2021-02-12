const webpack = require('webpack');

const LAZY_IMPORTS = [
  '@nestjs/microservices',
  '@nestjs/microservices/microservices-module',
  '@nestjs/websockets',
  '@nestjs/websockets/socket-module',
  '@nestjs/platform-express',
  'cache-manager',
  'class-validator',
  'class-transformer',
];

const ignorePlugin = new webpack.IgnorePlugin({
  checkResource(resource) {
    if (!LAZY_IMPORTS.includes(resource)) {
      return false;
    }

    try {
      require.resolve(resource);
    } catch (err) {
      return true;
    }

    return false;
  },
});

module.exports = {
  ignorePlugin,
};
