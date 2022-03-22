const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:7].bundle.js",
  },
  devServer: {
    port: 8080,
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv({ browsers: "last 1 versions" })],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
      },
      {
        test: /\.pdf$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/pdf/[name][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Chanze's Portfolio Website`,
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"), //模板位置
      // viewport: "width=640, user-scalable=no",
      viewport: "width=device-width,initial-scale=1",
      description: "個人作品集",
      Keywords: "前端開發、前端、工程師、作品集",
      // inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:7].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
