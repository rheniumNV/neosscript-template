import React from "react";
import Slot from "lib/neosscript/core/Slot";
import { generateId } from "lib/neosscript/util";
import Grabbable from "lib/neosscript/core/components/Transform/Interaction/Grabbable";
import BoxCollider from "lib/neosscript/core/components/Physics/Colliders/BoxCollider";
import BoxMesh from "lib/neosscript/core/components/Assets/Procedural Meshes/BoxMesh";
import MeshRenderer from "lib/neosscript/core/components/Rendering/MeshRenderer";
import ValueCopy_T from "lib/neosscript/core/components/Transform/Drivers/ValueCopy_T";
import PBS_Metallic from "lib/neosscript/core/components/Assets/Materials/PBS_Metallic";
import NeosType from "lib/neosscript/core/types/NeosType";

export default () => {
  const meshId = generateId();
  const sizeSourceId = generateId();
  const sizeTargetId = generateId();
  const materialId = generateId();

  const Materials = [{ Data: materialId, ID: generateId() }];
  return (
    <Slot
      name="Box"
      components={[
        <Grabbable />,
        <BoxCollider Size={{ value: [1, 1, 1], id: sizeTargetId }} />,
        <BoxMesh id={meshId} Size={{ value: [1, 1, 1], id: sizeSourceId }} />,
        <MeshRenderer Mesh={meshId} Materials={Materials} />,
        <ValueCopy_T
          type={{
            T: NeosType.Float3,
          }}
          Target={sizeTargetId}
          Source={sizeSourceId}
        />,
        <PBS_Metallic id={materialId} />,
      ]}
    />
  );
};
