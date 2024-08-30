const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  };
  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin()];
  }
  return config;
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    entry: "./src/index.tsx",
  },
  optimization: optimization(),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isDev ? "[name].js" : "[name].[contenthash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".json", ".png", ".ts", ".tsx", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [
          isProd
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]_[local]--[hash:base64:5]",
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
    }),
    new CssMinimizerPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },

  devtool: isDev ? "inline-source-map" : "source-map",
};
