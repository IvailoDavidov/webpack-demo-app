const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3  Inject styles into DOM
          "css-loader", //2  Turns CSS into common JS
          "sass-loader", //1  Turns SASS into CSS
        ],
      },
    ],
  },
};
