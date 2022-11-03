const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const mode = "development";
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "eval",
  mode: mode,
  devServer: {
    allowedHosts: [".ngrok.io"],
    port: 8080,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    
    new BundleAnalyzerPlugin(),
  ],
});
