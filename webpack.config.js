const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "public/index.html"),
  filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [{
          loader: 'url-loader'
        }]
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    port: 3001
  }
};
