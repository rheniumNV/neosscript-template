const fs = require("fs");

exports.createFile = (outPath, filename, data, callback) => {
  const filePath = outPath + filename;
  console.log(filename);

  fs.writeFile(filePath, data, (err) => {
    if (err && err.code === "ENOENT") {
      const dir = filePath.substring(0, filePath.lastIndexOf("/"));

      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) throw err;
        this.createFile(outPath, filename, data, callback);
      });
      return;
    }
    callback();
  });
};
