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

function resolveSlot(
  slot,
  addAsset: (asset: any) => void,
  addTypeVersion: (typeVersion: { name: string; version: number }) => void
) {
  const { children, parentId } = slot;
  const comps = _.find(
    children,
    ({ tagName }) => tagName == "components"
  )?.children;
  const chills = _.find(
    children,
    ({ tagName }) => tagName == "children"
  )?.children;
  const assets = _.find(
    children,
    ({ tagName }) => tagName == "assets"
  )?.children;
  _.forEach(assets ?? [], (asset) => {
    addAsset(resolveComponent(asset, addTypeVersion));
  });
  const typeVersions = _.find(
    children,
    ({ tagName }) => tagName == "typeversions"
  )?.children;
  _.forEach(typeVersions ?? [], (typeVersion) => {
    addTypeVersion(resolveTypeVersion(typeVersion));
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
          [name]: {
            ID: generateId(id),
            Data: jsonParse(value),
          },
        },
      };
    }, {}),
    ParentReference: parentId ? parentId : null,
    Components: { ID: generateId(null), Data: comps },
    Children: _(chills)
      .filter(({ tagName }) => tagName === "slot")
      .map((slot) => ({
        ...slot,
        ...{ parentId: slotId },
      })),
  };
}

function resolveTypeVersion(typeVersion): { name: string; version: number } {
  const { properties } = typeVersion;
  const { name, version } = properties;
  return { name, version };
}

function resolveComponent(component, addTypeVersion) {
  const { children, properties } = component;
  const { name, id, persistentId, version } = properties;

  if (typeof version === "string") {
    addTypeVersion({ name: name, version: Number(version) });
  }

  return {
    Type: name,
    Data: {
      ID: generateId(id),
      UpdateOrder: { ID: generateId(null), Data: 0 },
      "persistent-ID": persistentId,
      Enabled: { ID: generateId(null), Data: true },
      ..._(children).reduce((prev, curr) => {
        const { name, value, id, data } = _.get(
          curr,
          ["children", 0],
          _.get(curr, ["properties"], {})
        );
        return {
          ...prev,
          ...{
            [name]: data
              ? jsonParse(data)
              : {
                  ID: generateId(id),
                  Data: jsonParse(value),
                },
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

    const rootSlot = _.get(mdast, ["children", 0], {});
    const assets = [];
    const addAsset = (asset) => {
      assets.push(asset);
    };
    let typeVersions = {};
    const addTypeVersion = (typeVersion: { name: string; version: number }) => {
      typeVersions = {
        ...typeVersions,
        ...{ [typeVersion.name]: typeVersion.version },
      };
    };

    const result = JSON.stringify(rootSlot, (key, value) => {
      if (hasAllKey(value, ["type", "tagName", "children", "properties"])) {
        const { tagName } = value;
        if (tagName == "slot") {
          return resolveSlot(value, addAsset, addTypeVersion);
        } else if (tagName == "component") {
          return resolveComponent(value, addTypeVersion);
        }
      }
      if (_.includes(["offset", "column", "line", "end", "position"], key)) {
        return undefined;
      }

      const type = value?.type;
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
    });

    return `{"Object":${result},"Assets":${JSON.stringify(
      assets
    )},"TypeVersions": ${JSON.stringify(typeVersions)}}`;
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
