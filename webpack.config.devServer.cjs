const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientConfig = {
  mode: "production",
  entry: "./src/lib/devConsole/main.tsx",
  cache: true,
  target: "web",
  output: {
    path: path.resolve(__dirname, "devServer/public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/lib/devConsole/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
};

const serverConfig = {
  mode: "development",
  entry: "./src/lib/devConsole/server.ts",
  cache: true,
  output: {
    path: path.resolve(__dirname, "devServer"),
    filename: "server.cjs",
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
  plugins: [new NodemonPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  externals: [
    nodeExternals({
      allowlist: [
        "web-namespaces",
        "comma-separated-tokens",
        "space-separated-tokens",
        "hast-util-parse-selector",
        "property-information",
        "hastscript",
        "hast-util-from-parse5",
        "rehype-parse",
        "unist-util-stringify-position",
        /^vfile/,
        "trough",
        "is-plain-obj",
        "bail",
        "unified",
      ],
    }),
  ],
};

module.exports = [clientConfig, serverConfig];
