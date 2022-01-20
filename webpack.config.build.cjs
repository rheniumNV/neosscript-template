const path = require("path");

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
};
module.exports = webpackConfig;
