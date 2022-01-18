const path = require("path");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "result.js",
  },
  modules: [path.resolve("./src"), path.resolve("./node_modules")],
};
