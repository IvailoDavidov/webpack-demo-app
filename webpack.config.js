const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
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
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/i,
        type: "asset/resource",
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     name: "[name].[ext]",
        //     outputPath: "assets",
        //   },
        // },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // devtool: "source-map",
};
