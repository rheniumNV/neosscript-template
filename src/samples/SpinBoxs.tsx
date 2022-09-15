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
import Spinner from "lib/neosscript/core/components/Transform/Drivers/Spinner";
import _ from "lodash";

const Box = ({ position, size, color, speed }) => {
  const meshId = generateId();
  const sizeSourceId = generateId();
  const sizeTargetId = generateId();
  const materialId = generateId();
  const rotationId = generateId();

  const Materials = [{ Data: materialId, ID: generateId() }];
  return (
    <Slot
      position={position}
      rotation={{ value: [0, 0, 0], id: rotationId }}
      name="Box"
      components={[
        <BoxCollider Size={{ value: [1, 1, 1], id: sizeTargetId }} />,
        <BoxMesh id={meshId} Size={{ value: size, id: sizeSourceId }} />,
        <MeshRenderer Mesh={meshId} Materials={Materials} />,
        <ValueCopy_T
          type={{
            T: NeosType.Float3,
          }}
          Target={sizeTargetId}
          Source={sizeSourceId}
        />,
        <PBS_Metallic id={materialId} AlbedoColor={color} />,
        <Spinner _speed={speed} _target={rotationId} />,
      ]}
    />
  );
};

export default () => {
  return (
    <Slot name="SpinBoxs" components={[<Grabbable Scalable={true} />]}>
      {_.map(_.range(10), (num) => (
        <Box
          position={[0, num * 0.1, 0]}
          size={[2 - num * 0.1, 0.09, 0.1]}
          color={[num * 0.1, 1 - num * 0.1, 0, 1]}
          speed={[0, num * 20, 0]}
        />
      ))}
    </Slot>
  );
};
