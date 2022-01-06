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
import DVSlot from "lib/dv/DVSlot";
import NeosType from "lib/core/types/NeosType";

export default () => {
  const ItemName = "CalenderForm";
  const rootSlotId = generateId();
  return (
    <Slot
      id={rootSlotId}
      name={ItemName}
      components={[
        <Grabbable Scalable={true} />,
        <DynamicVariableSpace SpaceName={ItemName} />,
      ]}
    >
      <DVSlot
        valueVariables={[
          { type: NeosType.Float, name: "StartTime", value: 100 },
          { type: NeosType.Color, name: "Main" },
        ]}
        referenceVariables={[
          { type: NeosType.Slot, name: "Root", value: rootSlotId },
        ]}
      />
    </Slot>
  );
};
