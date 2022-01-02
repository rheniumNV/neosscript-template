import { unified } from "unified";
import parse from "rehype-parse";
import fs from "fs";
import _ from "lodash";

const data = fs.readFileSync("dist/index.html");

const parser = unified().use(parse, { fragment: true });
const mdast = parser.parse(data);

const hasAllKey = (list, requireKeys) => {
  return _(requireKeys)
    .map((key) => _.includes(_.keys(list), key))
    .every();
};

const result = JSON.stringify(
  mdast,
  (key, value) => {
    if (hasAllKey(value, ["type", "tagName", "children", "properties"])) {
      const { tagName, children, properties } = value;
      if (tagName == "slot") {
        const { children: comps } = _.find(
          children,
          ({ tagName }) => tagName == "components"
        );
        const { children: chills } = _.find(
          children,
          ({ tagName }) => tagName == "children"
        );
        return {
          type: tagName,
          ...properties,
          components: comps,
          children: chills,
        };
      } else if (tagName == "component") {
        return { type: tagName, ...properties, members: children };
      } else if (tagName == "member") {
        console.log(children);
        return { type: tagName, ...properties, ..._.get(children, 0, {}) };
      }
    }
    if (_.includes(["offset", "column", "line", "end", "position"], key)) {
      return undefined;
    }
    const { type } = value;
    if (type === "root") {
      return {
        body: _(_.get(value, "children", []))
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
