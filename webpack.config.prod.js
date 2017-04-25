const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.config');

module.exports = merge(webpackBaseConfig, {
  entry: {
    app: path.join(__dirname, 'src/app'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // Specify the common bundle's name.
    })
  ]
});
