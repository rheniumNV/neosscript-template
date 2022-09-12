const _ = require("lodash");

const typeVersions = require("./TypeVersions.json");

const NumberType = {
  define: "number",
  parser: ({ value }) => value,
};
const Number2Type = {
  define: "[number, number]",
  parser: ({ value }) => [0, 0],
};
const Number3Type = {
  define: "[number, number, number]",
  parser: ({ value }) => [0, 0, 0],
};
const Number4Type = {
  define: "[number, number, number, number]",
  parser: ({ value }) => [0, 0, 0, 0],
};
const StringType = {
  define: "string",
  parser: ({ value }) => "",
};

const TypeMap = {
  "FrooxEngine.Sync`1[System.Boolean]": {
    define: "boolean",
    parser: ({ value }) => false,
  },
  "FrooxEngine.Sync`1[System.Int16]": NumberType,
  "FrooxEngine.Sync`1[System.Int32]": NumberType,
  "FrooxEngine.Sync`1[System.Int64]": NumberType,
  "FrooxEngine.Sync`1[System.UInt16]": NumberType,
  "FrooxEngine.Sync`1[System.UInt32]": NumberType,
  "FrooxEngine.Sync`1[System.UInt64]": NumberType,
  "FrooxEngine.Sync`1[System.Single]": NumberType,
  "FrooxEngine.Sync`1[System.Double]": NumberType,
  "FrooxEngine.Sync`1[System.Decimal]": NumberType,
  "FrooxEngine.Sync`1[BaseX.int2]": Number2Type,
  "FrooxEngine.Sync`1[BaseX.float2]": Number2Type,
  "FrooxEngine.Sync`1[BaseX.float3]": Number3Type,
  "FrooxEngine.Sync`1[BaseX.float4]": Number4Type,
  "FrooxEngine.Sync`1[BaseX.color]": Number4Type,
  "FrooxEngine.LogiX.Input`1[BaseX.floatQ]": Number4Type,
  "FrooxEngine.FieldDrive`1[System.String]": StringType,
  "FrooxEngine.FieldDrive`1[System.Char]": StringType,
  "FrooxEngine.SyncAssetList`1[FrooxEngine.Material]": {
    define: "Array<{ID:string, Data:string}>",
    parser: ({ value }) => [],
  },
  "FrooxEngine.SyncList`1[FrooxEngine.UIX.InteractionElement+ColorDriver]": {
    define: `Array<{
        ID: string;
        ColorDrive:{ID:string; Data:string;};
        TintColorMode:{ID:string; Data:string|'Explicit';};
        NormalColor:{ID:string; Data:[number, number, number, number];};
        HighlightColor:{ID:string; Data:[number, number, number, number];};
        PressColor:{ID:string; Data:[number, number, number, number];};
        DisabledColor:{ID:string; Data:[number, number, number, number];};
      }>`,
    parser: ({ value }) => [],
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
    .map((str) => `${str}: {name: string},`)
    .join("\n");
  const typeInterfaceUnit =
    _.size(types) > 0 ? `type:{${typeInterfaceStr}},` : "";

  const typePropStr = _(types)
    .map((str) => `${str}:{name: ${str}},`)
    .join("\n");
  const typePropUnit = _.size(types) > 0 ? `type:{${typePropStr}},` : "";

  const typeNameStr = _(types)
    .map((str) => `${str},`)
    .join("\n");

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
        )}[\${[${typeNameStr}]}]\`}`
      : `"${fullName}"`;

  const version = _.get(typeVersions, fullName);

  const data = `import React, { FC } from "react";
    import { member, Member } from "lib/neoscript/core/Member";
    
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
        <component name=${componentClassName} id={id} persistentId={persistentId} updateOrderId={updateOrderId} updateOrder={updateOrder}${
    version ? ` version={${version}}` : ""
  }>
        ${memberUnit}
        </component>
      );
    };
    
    export default ${fixedName};
    `;
  return data;
};
