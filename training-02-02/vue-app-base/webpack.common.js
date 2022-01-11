const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

/** @type { import('webpack').Configuration } */
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/js/[name].[contentHash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: 'static/img/[name].[hash:7].[ext]',
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('/')
    })
  ]
}
