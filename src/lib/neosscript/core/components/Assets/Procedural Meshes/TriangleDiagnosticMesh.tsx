import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TriangleDiagnosticMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  TriangleIndex?: member<number>;
  Vertex0Color?: member<[number, number, number, number]>;
  Vertex1Color?: member<[number, number, number, number]>;
  Vertex2Color?: member<[number, number, number, number]>;
  Displace?: member<number>;
  Mesh?: member<any>;
}

const TriangleDiagnosticMesh: FC<TriangleDiagnosticMeshInput> = (
  props: TriangleDiagnosticMeshInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    TriangleIndex,
    Vertex0Color,
    Vertex1Color,
    Vertex2Color,
    Displace,
    Mesh,
  } = props;

  return (
    <component
      name="FrooxEngine.TriangleDiagnosticMesh"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HighPriorityIntegration"
        content={HighPriorityIntegration} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OverrideBoundingBox"
        content={OverrideBoundingBox} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`}
        name="OverridenBoundingBox"
        content={
          OverridenBoundingBox
        } /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="TriangleIndex"
        content={TriangleIndex} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Vertex0Color"
        content={Vertex0Color} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Vertex1Color"
        content={Vertex1Color} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Vertex2Color"
        content={Vertex2Color} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Displace"
        content={Displace} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`}
        name="Mesh"
        content={Mesh} /* default: ID0 */
      />
    </component>
  );
};

export default TriangleDiagnosticMesh;
