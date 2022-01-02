const _ = require("lodash");
const fs = require("fs");
const util = require("util");

const componentDataList = [
  {
    name: "BoxCollider",
    pathName: "/Physics/Colliders/BoxCollider",
    fullName: "FrooxEngine.BoxCollider",
    syncmembers: [
      {
        name: "persistent",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "UpdateOrder",
        type: "FrooxEngine.Sync`1[System.Int32]",
        default: "0",
      },
      {
        name: "Enabled",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "Offset",
        type: "FrooxEngine.Sync`1[BaseX.float3]",
        default: "[0; 0; 0]",
      },
      {
        name: "Type",
        type: "FrooxEngine.Sync`1[FrooxEngine.ColliderType]",
        default: "NoCollision",
      },
      {
        name: "Mass",
        type: "FrooxEngine.Sync`1[System.Single]",
        default: "0",
      },
      {
        name: "CharacterCollider",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "IgnoreRaycasts",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "Size",
        type: "FrooxEngine.Sync`1[BaseX.float3]",
        default: "[0; 0; 0]",
      },
    ],
  },
  {
    name: "Grabbable",
    pathName: "/Transform/Interaction/Grabbable",
    fullName: "FrooxEngine.Grabbable",
    syncmembers: [
      {
        name: "persistent",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "UpdateOrder",
        type: "FrooxEngine.Sync`1[System.Int32]",
        default: "0",
      },
      {
        name: "Enabled",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "ReparentOnRelease",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "PreserveUserSpace",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "DestroyOnRelease",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "GrabPriority",
        type: "FrooxEngine.Sync`1[System.Int32]",
        default: "0",
      },
      {
        name: "GrabPriorityWhenGrabbed",
        type: "FrooxEngine.Sync`1[System.Nullable`1[System.Int32]]",
        default: "<i>null</i>",
      },
      {
        name: "CustomCanGrabCheck",
        type: "FrooxEngine.SyncDelegate`1[FrooxEngine.GrabCheck]",
        default: "FrooxEngine.WorldDelegate",
      },
      {
        name: "EditModeOnly",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "AllowSteal",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "DropOnDisable",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "ActiveUserFilter",
        type: "FrooxEngine.Sync`1[FrooxEngine.ActiveUserHandling]",
        default: "Disabled",
      },
      {
        name: "Scalable",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "Receivable",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "AllowOnlyPhysicalGrab",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "_grabber",
        type: "FrooxEngine.SyncRef`1[FrooxEngine.Grabber]",
        default: "ID0",
      },
      {
        name: "_lastParent",
        type: "FrooxEngine.SyncRef`1[FrooxEngine.Slot]",
        default: "ID0",
      },
      {
        name: "_lastParentIsUserSpace",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
      {
        name: "__legacyActiveUserRootOnly",
        type: "FrooxEngine.Sync`1[System.Boolean]",
        default: "False",
      },
    ],
  },
];

const TypeMap = {
  "FrooxEngine.Sync`1[System.Boolean]": {
    define: "boolean",
    parser: (value) => false,
  },
  "FrooxEngine.Sync`1[System.Int32]": {
    define: "number",
    parser: (value) => value,
  },
  "FrooxEngine.Sync`1[System.Single]": {
    define: "number",
    parser: (value) => value,
  },
  "FrooxEngine.Sync`1[BaseX.float3]": {
    define: "{x:number, y:number, z:number}",
    parser: (value) => ({ x: 0, y: 0, z: 0 }),
  },
};
const anyType = {
  define: "any",
  parser: (value) => value,
};

componentDataList.forEach(({ name, syncmembers }) => {
  const interfaceUnit = _(syncmembers)
    .map(({ name, type }) => {
      return `${name}?: member<${_.get(TypeMap, type, anyType).define}>;`;
    })
    .join("\n");
  const propsUnit = _(syncmembers)
    .map(({ name, type }) => {
      return `${name},`;
    })
    .join("\n");
  const memberUnit = _(syncmembers)
    .map(({ name, type }) => {
      return util.format(
        '<Member type="%s" name="%s" content={%s}/>',
        type,
        name,
        name
      );
    })
    .join("\n");
  const data = `import React, { FC } from "react";
  import { member, Member } from "../Member";
  
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        component: any;
      }
    }
  }
  interface ${name}Input {
      ${interfaceUnit}
  }
  
  const ${name}: FC<${name}Input> = (props: ${name}Input) => {
    const { ${propsUnit} } = props;
  
    return (
      <component name="${name}">
      ${memberUnit}
      </component>
    );
  };
  
  export default ${name};
  
  `;
  fs.writeFile(
    util.format("src/lib/core/components/%s.tsx", name),
    data,
    (err) => {
      if (err) throw err;
      console.log("exported ", name);
    }
  );
});
