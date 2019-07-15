const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { basicConfig, rules, plugins } = require('./config');

const config = {
  module: {
    rules
  },
  plugins
};

module.exports = merge(basicConfig, config, {
  entry: {
    index: path.join(__dirname, '../example/index.tsx')
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../example/index.ejs'),
      filename: 'index.html'
    })
  ]
});
