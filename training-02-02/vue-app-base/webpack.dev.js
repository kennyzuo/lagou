const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'xiaodaidai',
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      inject: true
    })
  ]
})
