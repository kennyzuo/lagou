const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'xiaodaidai',
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new CleanWebpackPlugin()
  ]
})
