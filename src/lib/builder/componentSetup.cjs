const _ = require("lodash");
const fs = require("fs");

const compNames = [
  "BoxCollider",
  "Grabbable",
  "ObjectRoot",
  "UI_UnlitMaterial",
  "SpriteProvider",
  "StaticTexture2D",
];
const componentDataList = _(require("./componentDataList.json")).filter(
  ({ name, pathName }) =>
    _.includes(compNames, name) ||
    (_.includes(pathName, "/UIX/") && !_.includes(pathName, "<"))
);

const TypeMap = {
  "FrooxEngine.Sync`1[System.Boolean]": {
    define: "boolean",
    parser: ({ value }) => false,
  },
  "FrooxEngine.Sync`1[System.Int32]": {
    define: "number",
    parser: ({ value }) => value,
  },
  "FrooxEngine.Sync`1[System.Single]": {
    define: "number",
    parser: ({ value }) => value,
  },
  "FrooxEngine.Sync`1[BaseX.float3]": {
    define: "[number, number, number]",
    parser: ({ value }) => [0, 0, 0],
  },
};
const anyType = {
  define: "any",
  parser: ({ value }) => value,
};

const createFile = (outPath, filename, data) => {
  const filePath = outPath + filename;

  fs.writeFile(filePath, data, (err) => {
    if (err && err.code === "ENOENT") {
      const dir = filePath.substring(0, filePath.lastIndexOf("/"));

      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) throw err;
        createFile(outPath, filename, data);
      });
      return;
    }
    console.log("created", filePath);
  });
};

componentDataList.forEach(({ name, fullName, pathName, syncmembers }) => {
  const members = _(syncmembers)
    .reject(({ name }) => name === "persistent")
    .value();
  const interfaceUnit = _(members)
    .map(({ name, type }) => {
      return `${name}?: member<${_.get(TypeMap, type, anyType).define}>;`;
    })
    .join("\n");
  const propsUnit = _(members)
    .map(({ name, type }) => {
      return `${name},`;
    })
    .join("\n");
  const memberUnit = _(members)
    .map(({ name, type, default: def }) => {
      return `<Member type="${type}" name="${name}" content={${name}} /* default: ${def} */ />`;
    })
    .join("\n");
  const data = `import React, { FC } from "react";
  import { member, Member } from "lib/core/Member";
  
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        component: any;
      }
    }
  }
  export interface ${name}Input {
      id?:string;
      persistentId?:string;
      ${interfaceUnit}
  }
  
  const ${name}: FC<${name}Input> = (props: ${name}Input) => {
    const { id, persistentId, ${propsUnit} } = props;
  
    return (
      <component name="${fullName}" id={id} persistentId={persistentId}>
      ${memberUnit}
      </component>
    );
  };
  
  export default ${name};
  
  `;
  const outPath =
    "src/lib/core/components" +
    _(_.split(pathName, "/")).slice(0, -1).join("/") +
    "/";
  createFile(outPath, name + ".tsx", data);
});
