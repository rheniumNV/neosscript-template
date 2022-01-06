import React from "react";
import Slot from "lib/core/Slot";
import { generateId } from "lib/core/util";
import Grabbable from "lib/core/components/Transform/Interaction/Grabbable";
import BoxCollider from "lib/core/components/Physics/Colliders/BoxCollider";
import BoxMesh from "lib/core/components/Assets/Procedural Meshes/BoxMesh";
import MeshRenderer from "lib/core/components/Rendering/MeshRenderer";
import ValueCopy_T from "lib/core/components/Transform/Drivers/ValueCopy_T";
import PBS_Metallic from "lib/core/components/Assets/Materials/PBS_Metallic";
import DynamicVariableSpace from "lib/core/components/Data/Dynamic/DynamicVariableSpace";

export default () => {
  const ItemName = "CalenderForm";
  return (
    <Slot
      name={ItemName}
      components={[
        <Grabbable Scalable={true} />,
        <DynamicVariableSpace SpaceName={ItemName} />,
      ]}
    ></Slot>
  );
};
