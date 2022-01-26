const path = require("path");
const AutoBuildPlugin = require("./auto-build-plugin.cjs");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  cache: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.cjs",
    library: "NeosObject",
    libraryTarget: "commonjs",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /(node_modules | bower_components)/,
      },
    ],
  },
  plugins: [new AutoBuildPlugin("dist/neosObject.json")],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
};
