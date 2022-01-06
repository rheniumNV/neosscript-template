const _ = require("lodash");

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
  "FrooxEngine.Sync`1[BaseX.float2]": {
    define: "[number, number]",
    parser: ({ value }) => [0, 0],
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

exports.generateComponent = ({ fixedName, fullName, members, types }) => {
  const interfaceUnit = _(members)
    .map(({ name, type }) => {
      return `${name}?: member<${_.get(TypeMap, type, anyType).define}>;`;
    })
    .join("\n");

  const typeInterfaceStr = _(types)
    .map((str) => `${str}: string,`)
    .join("\n");
  const typeInterfaceUnit =
    _.size(types) > 0 ? `type:{${typeInterfaceStr}},` : "";

  const typePropStr = _(types)
    .map((str) => `${str},`)
    .join("\n");
  const typePropUnit = _.size(types) > 0 ? `type:{${typePropStr}},` : "";

  const propsUnit = _(members)
    .map(({ name, type }) => {
      return `${name},`;
    })
    .join("\n");
  const memberUnit = _(members)
    .map(({ name, type, default: def }) => {
      return `<Member type={\`${_.replace(
        _.replace(type, new RegExp("`", "g"), "\\`"),
        "[T]",
        "[${T}]"
      )}\`} name="${name}" content={${name}} /* default: ${def} */ />`;
    })
    .join("\n");

  const componentClassName =
    _.size(types) > 0
      ? `{\`${_.replace(
          fullName,
          new RegExp("`", "g"),
          "\\`"
        )}[\${[${typePropStr}]}]\`}`
      : `"${fullName}"`;

  const data = `import React, { FC } from "react";
    import { member, Member } from "lib/core/Member";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ${fixedName}Input {
        ${typeInterfaceUnit}
        id?:string;
        persistentId?:string;
        updateOrderId?:string;
        updateOrder?:number;
        ${interfaceUnit}
    }
    
    const ${fixedName}: FC<${fixedName}Input> = (props: ${fixedName}Input) => {
      const {${typePropUnit} id, persistentId, updateOrderId, updateOrder, ${propsUnit} } = props;
    
      return (
        <component name=${componentClassName} id={id} persistentId={persistentId} updateOrderId={updateOrderId} updateOrder={updateOrder}>
        ${memberUnit}
        </component>
      );
    };
    
    export default ${fixedName};
    `;
  return data;
};
