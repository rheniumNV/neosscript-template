import { unified } from "unified";
import parse from "rehype-parse";
import fs from "fs";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const data = fs.readFileSync("dist/index.html");

const parser = unified().use(parse, { fragment: true });
const mdast = parser.parse(data);

const hasAllKey = (list, requireKeys) => {
  return _(requireKeys)
    .map((key) => _.includes(_.keys(list), key))
    .every();
};

const generateId = (id) => (id ? id : uuidv4());

const result = JSON.stringify(
  mdast,
  (key, value) => {
    if (hasAllKey(value, ["type", "tagName", "children", "properties"])) {
      const { tagName, children, properties, parenId } = value;
      if (tagName == "slot") {
        const { children: comps } = _.find(
          children,
          ({ tagName }) => tagName == "components"
        );
        const { children: chills } = _.find(
          children,
          ({ tagName }) => tagName == "children"
        );
        const slotData = _.find(
          children,
          ({ tagName }) => tagName == "slotdata"
        );
        const { id = generateId() } = properties;
        const slotId = generateId(id);
        const persistentId = _.get(slotData, ["properties", "persistentId"]);
        return {
          ID: slotId,
          "Persistent-ID": generateId(persistentId),
          ..._(_.get(slotData, "children", [])).reduce((prev, curr) => {
            const { name, value, id } = _.get(curr, ["properties"], {});
            return {
              ...prev,
              ...{ [name]: { ID: generateId(id), Data: JSON.parse(value) } },
            };
          }, {}),
          ParentReference: parenId ? parenId : null,
          Components: { ID: generateId(), Data: comps },
          Children: _(chills).map((slot) => ({
            ...slot,
            ...{ parenId: slotId },
          })),
        };
      } else if (tagName == "component") {
        const { name, id } = properties;
        return {
          Type: name,
          Data: {
            ID: generateId(id),
            "persistent-ID": generateId(),
            UpdateOrder: { ID: generateId(), Data: 0 },
            Enabled: { ID: generateId(), Data: true },
            ..._(children).reduce((prev, curr) => {
              const { name, value, id } = _.get(curr, ["children", 0], {});
              return {
                ...prev,
                ...{ [name]: { ID: generateId(id), Data: JSON.parse(value) } },
              };
            }, {}),
          },
        };
      } else if (tagName == "member" && false) {
        return { type: tagName, ...properties, ..._.get(children, 0, {}) };
      }
    }
    if (_.includes(["offset", "column", "line", "end", "position"], key)) {
      return undefined;
    }
    const { type } = value ? value : {};
    if (type === "root") {
      return {
        Object: _(_.get(value, "children", []))
          .filter(
            ({ type, tagName }) => type === "element" && tagName === "slot"
          )
          .get(0),
      };
    }
    return value;
  },
  2
);

fs.writeFile("dist/result.json", result, (err) => {
  if (err) throw err;
  console.log("変換が完了しました");
});
