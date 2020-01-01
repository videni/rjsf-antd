const path = require('path');
const webpack = require('webpack');

/* 基础配置 */
exports.basicConfig = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  devtool: 'module-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-jsonschema-form': '@vidyvideni/react-jsonschema-form'
    }
  }
};

/* rules */
exports.rules = [
  {
    test: /.*\.tsx?$/,
    use: [
      {
        loader: 'babel-loader'
      },
      'ts-loader'
    ],
    exclude: /node_modules/
  },
  {
    test: /.*\.less$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]___[hash:base64:5]'
          }
        }
      },
      'less-loader'
    ],
    include: /(src|lib|example)/
  },
  {
    test: /.*\.css/,
    use: ['style-loader', 'css-loader'],
    include: /node_modules/
  }
];

/* plugins */
exports.plugins = [
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/
  })
];
