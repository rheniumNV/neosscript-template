import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface QuadArrayMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Points?: member<any>;
  Sizes?: member<any>;
  Rotations?: member<any>;
  Colors?: member<any>;
  UVs?: member<any>;
}

const QuadArrayMesh: FC<QuadArrayMeshInput> = (props: QuadArrayMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Points,
    Sizes,
    Rotations,
    Colors,
    UVs,
  } = props;

  return (
    <component
      name="FrooxEngine.QuadArrayMesh"
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
        type={`FrooxEngine.SyncArray\`1[BaseX.float3]`}
        name="Points"
        content={Points} /* default: FrooxEngine.SyncArray`1[BaseX.float3] */
      />
      <Member
        type={`FrooxEngine.SyncArray\`1[BaseX.float2]`}
        name="Sizes"
        content={Sizes} /* default: FrooxEngine.SyncArray`1[BaseX.float2] */
      />
      <Member
        type={`FrooxEngine.SyncArray\`1[BaseX.floatQ]`}
        name="Rotations"
        content={Rotations} /* default: FrooxEngine.SyncArray`1[BaseX.floatQ] */
      />
      <Member
        type={`FrooxEngine.SyncArray\`1[BaseX.color]`}
        name="Colors"
        content={Colors} /* default: FrooxEngine.SyncArray`1[BaseX.color] */
      />
      <Member
        type={`FrooxEngine.SyncArray\`1[BaseX.float4]`}
        name="UVs"
        content={UVs} /* default: FrooxEngine.SyncArray`1[BaseX.float4] */
      />
    </component>
  );
};

export default QuadArrayMesh;
