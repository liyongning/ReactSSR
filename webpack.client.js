/**
 * 打包client bundle
 */
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/client')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // preset-react让babel具有转换jsx的能力, preset-env将es6转换为es5
          presets: ['@babel/preset-react', ['@babel/preset-env']]
        }
      }
    ]
  }
}