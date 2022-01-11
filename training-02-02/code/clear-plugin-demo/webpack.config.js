const path = require('path');
const { ClearPlugin } = require('./clear-plugin.js');
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  plugins: [
    new ClearPlugin()
  ]
}