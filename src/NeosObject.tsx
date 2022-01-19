import React from "react";
import Slot from "lib/neoscript/core/Slot";
import { generateId } from "lib/neoscript/util";
import Grabbable from "lib/neoscript/core/components/Transform/Interaction/Grabbable";
import BoxCollider from "lib/neoscript/core/components/Physics/Colliders/BoxCollider";
import BoxMesh from "lib/neoscript/core/components/Assets/Procedural Meshes/BoxMesh";
import MeshRenderer from "lib/neoscript/core/components/Rendering/MeshRenderer";
import ValueCopy_T from "lib/neoscript/core/components/Transform/Drivers/ValueCopy_T";
import PBS_Metallic from "lib/neoscript/core/components/Assets/Materials/PBS_Metallic";
import NeosType from "lib/neoscript/core/types/NeosType";

export default ({ Size = [1, 1, 1] }: any) => {
  const meshId = generateId();
  const sizeSourceId = generateId();
  const sizeTargetId = generateId();
  const materialId = generateId();

  return (
    <Slot
      name="Box"
      components={[
        <Grabbable />,
        <BoxCollider Size={{ value: [1, 1, 1], id: sizeTargetId }} />,
        <BoxMesh id={meshId} Size={{ value: Size, id: sizeSourceId }} />,
        <MeshRenderer
          Mesh={meshId}
          Materials={[{ Data: materialId, ID: generateId() }]}
        />,
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
