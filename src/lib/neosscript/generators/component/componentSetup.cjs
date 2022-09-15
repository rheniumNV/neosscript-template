const _ = require("lodash");
const { createFile } = require("./createFile.cjs");
const { generateComponent } = require("./generateComponent.cjs");

const components = require("./Components.json");

const targetComponents = _(components).filter(
  ({ name, pathName }) =>
    _.includes(
      [
        "BoxCollider",
        "Grabbable",
        "ObjectRoot",
        "UI_UnlitMaterial",
        "SpriteProvider",
        "StaticTexture2D",
        "ValueCopy<T>",
        "BoxMesh",
        "MeshRenderer",
        "PBS_Metallic",
      ],
      name
    ) ||
    _.includes(pathName, "/Assets/") ||
    _.includes(pathName, "/Data") ||
    _.includes(pathName, "/UIX/") ||
    _.includes(pathName, "/Common UI/") ||
    _.includes(pathName, "/Utility/") ||
    _.includes(pathName, "/Transform/Drivers/")
);

targetComponents.forEach(({ name, fullName, pathName, syncmembers }) => {
  const members = _(syncmembers)
    .reject(({ name }) => name === "persistent" || name === "UpdateOrder")
    .value();

  const types = _.filter(
    _.split(
      _.map(_.get(_.split(name, "<"), 1, ""), (str) => _.replace(str, ">", "")),
      ","
    ),
    (str) => str
  );
  const fixedName = _.replace(
    _.replace(_.replace(name, "<", "_"), ">", ""),
    ",",
    "_"
  );
  console.log(types);

  const componentString = generateComponent({
    name,
    fixedName,
    fullName,
    members,
    types,
  });

  console.log(fixedName);
  const outPath =
    "src/lib/neoscript/core/components" +
    _(_.split(pathName, "/")).slice(0, -1).join("/") +
    "/";
  createFile(outPath, fixedName + ".tsx", componentString, () => {
    console.log("create", pathName);
  });
});
