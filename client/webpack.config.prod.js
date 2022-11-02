const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const mode = "production";

module.exports = {
  stats: "errors-warnings",
  entry: ["@babel/polyfill", "./src/index.js"],
  mode: mode,
  output: {
    filename: "[name]-[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin(
      { template: "./public/index.html" },
      { inject: true }
    ),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].bundle.css",
    }),
    new NodePolyfillPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "sass-loader",
            options: {},
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: ["last 3 versions", "ie >9"],
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpg)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
