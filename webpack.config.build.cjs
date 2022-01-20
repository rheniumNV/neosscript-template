const path = require("path");
const nodeExternals = require("webpack-node-externals");

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
