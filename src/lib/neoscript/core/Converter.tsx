import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import { unified } from "unified";
import parse from "rehype-parse";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

function hasAllKey(list, requireKeys) {
  return _(requireKeys)
    .map((key) => _.includes(_.keys(list), key))
    .every();
}

function generateId(id) {
  return id ?? uuidv4();
}

function jsonParse(value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

function resolveSlot(slot, addAsset) {
  const { children, parentId } = slot;
  const { children: comps } =
    _.find(children, ({ tagName }) => tagName == "components") ?? {};
  const { children: chills } =
    _.find(children, ({ tagName }) => tagName == "children") ?? {};
  const { children: assets } =
    _.find(children, ({ tagName }) => tagName == "assets") ?? {};
  _.forEach(assets ?? [], (asset) => {
    addAsset(resolveComponent(asset));
  });
  const slotData = _.find(children, ({ tagName }) => tagName == "slotdata");
  const slotId = generateId(_.get(slotData, ["properties", "id"]));
  const persistentId = _.get(slotData, ["properties", "persistentId"]);
  return {
    ID: slotId,
    "Persistent-ID": generateId(persistentId),
    ..._(_.get(slotData, "children", [])).reduce((prev, curr) => {
      const { name, value, id } = _.get(curr, ["properties"], {});
      return {
        ...prev,
        ...{
          [name]: { ID: generateId(id), Data: jsonParse(value) },
        },
      };
    }, {}),
    ParentReference: parentId ? parentId : null,
    Components: { ID: generateId(null), Data: comps },
    Children: _(chills).map((slot) => ({
      ...slot,
      ...{ parentId: slotId },
    })),
  };
}

function resolveComponent(component) {
  const { children, properties } = component;
  const { name, id } = properties;
  return {
    Type: name,
    Data: {
      ID: generateId(id),
      "persistent-ID": generateId(null),
      UpdateOrder: { ID: generateId(null), Data: 0 },
      Enabled: { ID: generateId(null), Data: true },
      ..._(children).reduce((prev, curr) => {
        const { name, value, id } = _.get(
          curr,
          ["children", 0],
          _.get(curr, ["properties"], {})
        );
        return {
          ...prev,
          ...{
            [name]: { ID: generateId(id), Data: jsonParse(value) },
          },
        };
      }, {}),
    },
  };
}

export function ToNeosObject(Element): Function {
  return (params: any) => {
    const data = renderToStaticMarkup(<Element {...params} />);

    const parser = unified().use(parse, { fragment: true });
    const mdast = parser.parse(data);

    const assets = [];
    const addAsset = (asset) => {
      assets.push(asset);
    };

    const result = JSON.stringify(
      mdast,
      (key, value) => {
        if (hasAllKey(value, ["type", "tagName", "children", "properties"])) {
          const { tagName } = value;
          if (tagName == "slot") {
            return resolveSlot(value, addAsset);
          } else if (tagName == "component") {
            return resolveComponent(value);
          }
        }
        if (_.includes(["offset", "column", "line", "end", "position"], key)) {
          return undefined;
        }
        // @ts-ignore
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

    return result;
  };
}

export default function Converter(Element): {
  origin: JSX.Element;
  toNeosObject: Function;
} {
  return {
    origin: Element,
    toNeosObject: ToNeosObject(Element),
  };
}
