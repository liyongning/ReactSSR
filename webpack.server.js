/**
 * 打包server bundle
 */
const path = require('path')
// 扫描项目中的node_modules目录以及子目录,告诉webpack不要打包任何的node_modules目录
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // 告诉webpack将代码编译为类node.js环境可用,比如使用require加载chunk
  target: 'node',
  mode: 'development',
  // 告诉webpack不要打包node_modules目录,让打包出来的bundle依赖存在于用户环境中的依赖
  externals: [nodeExternals()],
  entry: './server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/server')
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
      },
      {
        test: /\.css$/,
        // isomorphic-style-loader 专为同构应用优化的style-loader， 普通的style-loader在服务端无法运行，因为服务端没有document.createElement
        // use: ['isomorphic-style-loader', 'css-loader']
        use: ['isomorphic-style-loader', {
          // css-loader 开启模块化
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      }
    ]
  }
}