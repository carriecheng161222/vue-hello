'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')


const vueLoaderConfig = require('./vue-loader.conf')
// 返回绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {// webpack 文件入口
    app: './src/main.js'
  },
  output: {// webpack 输出路径
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    // 自动补全文件路径
    extensions: ['.js', '.vue', '.json'],
    // 提供别名，缩短路径长度
    alias: {
      'vue$': 'vue/dist/vue.esm.js',// import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
      '@': resolve('src'),
    }
  },
  // 不同类型模块的处理规则
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',// 对所有.vue文件使用vue-loader进行编译
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',// 对 src 和 test 文件夹下的 .js 文件使用 babel-loader 将 es6+ 的代码转成 es5
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]// 只对此目录下的文件经行处理
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader', // 对图片资源文件使用url-loader
        options: {
          limit: 10000,// 图片小于 10kb 的情况转化为 base64
          name: utils.assetsPath('img/[name].[hash:7].[ext]') // 其他的图片转移到静态资源文件夹
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',// 对多媒体资源文件使用url-loader
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,// 对字体资源文件使用url-loader
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader' ]
      // }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
