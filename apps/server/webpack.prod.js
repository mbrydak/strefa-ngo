const { ignorePlugin } = require('./webpack.base');

const configureWebpack = (config) => {
  return {
    ...config,
    mode: 'production',
    plugins: [...config.plugins, ignorePlugin],
  };
};

module.exports = configureWebpack;
