const { default: merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8888,
    hot: true
  }
});
