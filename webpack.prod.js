const { default: merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const path = require("path");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
module.exports = merge(webpackCommon, {
  mode: "production",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "js/[name].js"
  },
  // devtool: "source-map",
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // },
  // plugins:[new webpack.optimize.ModuleConcatenationPlugin],
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new TerserPlugin({
        parallel: 4
      })
    ],
    splitChunks: {
      // 默认值async
      // initial模块会分开优化打包 异步和非异步引入的包
      // all 将异步非异步引入的模块的公共部分抽离出来一个单独文件
      // async 将异步加载模块单独抽离出一个文件
      chunks: "all",
      // 默认值为30000 ，
      // //当文件体积大于=30kb时，会被拆分成两个文件
      minSize: 30000,
      // // 共享该模块的最小chunk数，当>=时才可以拆分
      minChunks: 1,
      // // 最多有5个异步加载该模块
      maxAsyncRequests: 5,
      // // 初始化时最多有三个请求该模块
      maxInitialRequests: 3,
      // 名字中间的间隔符
      automaticNameDelimiter: "~",
      // 打包后的名称，如果是true 通过分隔符分开，如vender~
      name: true,
      cacheGroups: {
        // default: false,
        // vendors: true,
        vendor: {
          chunks: "all",
          test: /(react|react-dom|react-dom-router)/,
          name: "vendor1",
          minChunks: 1,
          reuseExistingChunk: true,
          priority: 100,
          enforce: true
        },
        ui: {
          chunks: "all",
          test: /antd/,
          name: "ui",
          minChunks: 1,
          reuseExistingChunk: true,
          priority: 90,
          enforce: true
        }
      }
    }
  }
});
