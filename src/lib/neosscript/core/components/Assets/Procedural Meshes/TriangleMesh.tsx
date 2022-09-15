import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TriangleMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Vertex0?: member<any>;
  Vertex1?: member<any>;
  Vertex2?: member<any>;
  AutoNormals?: member<boolean>;
  AutoTangents?: member<boolean>;
  DualSided?: member<boolean>;
}

const TriangleMesh: FC<TriangleMeshInput> = (props: TriangleMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Vertex0,
    Vertex1,
    Vertex2,
    AutoNormals,
    AutoTangents,
    DualSided,
  } = props;

  return (
    <component
      name="FrooxEngine.TriangleMesh"
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
        type={`FrooxEngine.TriangleMesh+Vertex`}
        name="Vertex0"
        content={
          Vertex0
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TriangleMesh\+Vertex,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.TriangleMesh+Vertex`}
        name="Vertex1"
        content={
          Vertex1
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TriangleMesh\+Vertex,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.TriangleMesh+Vertex`}
        name="Vertex2"
        content={
          Vertex2
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TriangleMesh\+Vertex,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoNormals"
        content={AutoNormals} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoTangents"
        content={AutoTangents} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DualSided"
        content={DualSided} /* default: False */
      />
    </component>
  );
};

export default TriangleMesh;
