var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};