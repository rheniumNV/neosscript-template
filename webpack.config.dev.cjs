const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
//const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const webpackConfig = {
  mode: "production",
  entry: "./src/lib/devConsole/server.ts",
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
    // new BrowserSyncPlugin(
    //   {
    //     host: "localhost",
    //     port: 4000,
    //     proxy: "http://localhost:3000/",
    //   },
    //   { reload: true }
    // ),
    new NodemonPlugin(),
  ],
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
module.exports = webpackConfig;
