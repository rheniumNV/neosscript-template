const { spawn } = require("child_process");
const notifier = require("node-notifier");

module.exports = class FirstBuildPlugin {
  constructor(path) {
    this.path = path;
  }

  apply(compiler) {
    compiler.hooks.done.tap("FirstBuildPlugin", () => {
      spawn("node", ["./dist/main.cjs", this.path]);
      notifier.notify("Converted");
    });
  }
};
