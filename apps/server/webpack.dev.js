const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const { ignorePlugin } = require('./webpack.base');

const configureWebpack = (config) => {
  return {
    ...config,
    entry: ['webpack/hot/poll?100', config.entry],
    mode: 'development',
    watch: true,
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...config.plugins,
      ignorePlugin,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
      new StartServerPlugin({ name: config.output.filename }),
    ],
  };
};

module.exports = configureWebpack;
