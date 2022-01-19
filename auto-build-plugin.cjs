const { spawn } = require("child_process");
const notifier = require("node-notifier");
const fs = require("fs");
const { log } = require("console");
module.exports = class AutoBuildPlugin {
  constructor(path) {
    this.path = path;
  }

  apply(compiler) {
    compiler.hooks.done.tap("AutoBuildPlugin", () => {
      const { NeosObject } = require("./dist/index.cjs");
      console.log(NeosObject);

      fs.writeFile(
        this.path || "dist/result.json",
        NeosObject.generate({}),
        (err) => {
          if (err) {
            console.error("エラーが発生しました", err);
            notifier.notify("エラーが発生しました");
            throw err;
          }
          console.log("変換が完了しました");
          notifier.notify("変換が完了しました");
        }
      );
    });
  }
};
