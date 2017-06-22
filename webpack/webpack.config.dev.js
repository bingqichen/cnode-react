const path = require('path');
const webpack = require('webpack');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const merge = require('webpack-merge');

const dashboard = new Dashboard();

const webpackBaseConfig = require('./webpack.config');

module.exports = merge(webpackBaseConfig, {
  devtool: 'eval',
  entry: {
    app: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      path.join(__dirname, 'src/app')
      // the entry point of our app
    ]
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: '[name].dev.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.join(__dirname, '.'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

    inline: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'http://localhost:3002/',
        secure: false
      }
    },
    quiet: true
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBrowserPlugin({
      port: 8080,
      url: 'http://localhost'
    }),
  ]
});
