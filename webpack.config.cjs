const path = require("path");
const AutoBuildPlugin = require("./auto-build-plugin.cjs");

module.exports = {
  mode: "production",
  entry: "./src/main.tsx",
  cache: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.cjs",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new AutoBuildPlugin("devServer/neosItem.json")],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
};
