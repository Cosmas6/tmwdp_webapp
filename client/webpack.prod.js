const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const mode = "production";
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: mode,
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new UglifyJsPlugin({ test: /\.js(\?.*)?$/i }),
    ],

    splitChunks: {
      chunks: "async",
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      test: /.js$|.css$.scss$/,
      threshold: 249856,
    }),
  ],
});
