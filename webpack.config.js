const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const isProductionMode = process.env.NODE_ENV === "production";

const port = process.env.PORT || 8000;
console.log("isProductionMode", isProductionMode);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    // publicPath: '.',
    filename: "bundle.[hash].js",
    chunkFilename: "[name]/chunk.[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "localhost",
    historyApiFallback: true,
    port: port,
    inline: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.less?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/dist/style/"
            }
          },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                exportLocalsConvention: "camelCaseOnly",
                localIdentName: "[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"]
                // config: 路径位置
              }
            }
          },
          {
            loader: "less-loader",
            options: {}
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[contenthash:4].css",
      chunkFilename: "[id].css",
      esModule: true,
      ignoreOrder: true
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: "Hello React17",
      template: path.join(__dirname, "index.html")
    })
  ],

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {},
      chunks: "all"
    }
  }
};
