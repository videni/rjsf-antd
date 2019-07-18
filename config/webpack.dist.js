const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { basicConfig, rules, plugins } = require('./config');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const config = {
  mode: 'production',
  cache: true,
  entry: path.join(__dirname, '../src/index.ts'),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '../dist/',
    filename: 'rjsf-antd.js',
    library: 'JSONSchemaFormAntd',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins,
  externals: [nodeExternals()],
};

module.exports = merge(basicConfig, config, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
