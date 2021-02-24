const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    react: ["react", "react-dom"]
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "./dll"),
    library: "[name]"
  },
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 1
      })
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]",
      path: path.resolve(__dirname, "./dll/[name].manifest.json")
    })
  ]
};
