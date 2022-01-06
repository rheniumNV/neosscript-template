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
      ],
      name
    ) ||
    (_.includes(pathName, "/UIX/") && !_.includes(pathName, "<"))
);

targetComponents.forEach(({ name, fullName, pathName, syncmembers }) => {
  const members = _(syncmembers)
    .reject(({ name }) => name === "persistent" || name === "UpdateOrder")
    .value();

  const genericTypes = _.endsWith(name, "<T>") ? ["T"] : [];
  const fixedName = _.replace(_.replace(name, "<", "_"), ">", "");

  const componentString = generateComponent({
    name,
    fixedName,
    fullName,
    members,
    genericTypes,
  });

  console.log(fixedName);
  const outPath =
    "src/lib/core/components" +
    _(_.split(pathName, "/")).slice(0, -1).join("/") +
    "/";
  createFile(outPath, fixedName + ".tsx", componentString, () => {
    console.log("create", pathName);
  });
});
