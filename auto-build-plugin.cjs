const notifier = require("node-notifier");
const fs = require("fs");
const _ = require("lodash");
module.exports = class AutoBuildPlugin {
  constructor(path) {
    this.path = path;
  }

  apply(compiler) {
    compiler.hooks.done.tap("AutoBuildPlugin", () => {
      try {
        const { NeosObject } = require("./dist/index.cjs");
        const generator = _.get(
          NeosObject,
          ["default", "toNeosObject"],
          () => ""
        );

        fs.writeFile(this.path || "dist/result.json", generator({}), (err) => {
          if (err) {
            console.error("エラーが発生しました", err);
            notifier.notify("エラーが発生しました");
            throw err;
          }
          console.log("変換が完了しました");
          notifier.notify("変換が完了しました");
        });
      } catch (err) {
        console.error("エラーが発生しました", err);
        notifier.notify("エラーが発生しました");
        throw err;
      }
    });
  }
};
