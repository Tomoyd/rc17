const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require("fs");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const webpack = require("webpack");

const files = fs.readdirSync(path.resolve(__dirname, "./dll"));
const dllPlugins = [];
files.forEach((file) => {
  if (/.*\.dll.js/.test(file)) {
    dllPlugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./dll", file)
      })
    );
  }
  if (/\.*\.manifest.json/.test(file)) {
    dllPlugins.push(
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: path.resolve(__dirname, "./dll", file)
      })
    );
  }
});
module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      react: path.resolve(
        __dirname,
        "./node_modules/react/umd/react.production.min.js"
      )
    },
    extensions: [".js", ".jsx", ".json"]
  },
  // cdn引入时
  // externals: {
  //   react: "react",
  //   "react-dom": "ReactDOM"
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve("./src"),
        use: ["thread-loader", "babel-loader"]
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.css",
      chunkFilename: "css/[id].css"
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    ...dllPlugins,
    new HtmlWebpackPlugin({
      title: "hello react",
      filename: "index.html",
      template: "index.html"
    })
  ]
};
