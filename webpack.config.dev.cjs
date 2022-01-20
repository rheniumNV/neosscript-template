const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const webpackConfig = {
  mode: "production",
  entry: "./src/lib/devConsole/main.tsx",
  cache: true,
  output: {
    path: path.resolve(__dirname, "devServer"),
    filename: "main.cjs",
  },
  target: ["node"],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 4000,
        proxy: "http://localhost:3000/",
      },
      { reload: true }
    ),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
};
module.exports = webpackConfig;
