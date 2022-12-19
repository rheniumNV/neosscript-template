import path from "path";
import AutoBuildPlugin from "./auto-build-plugin";

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  cache: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
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
  plugins: [
    new AutoBuildPlugin(path.resolve(__dirname, "dist/neosObject.json")),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
};
