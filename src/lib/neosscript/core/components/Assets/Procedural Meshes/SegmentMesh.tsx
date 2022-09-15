import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SegmentMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Radius?: member<number>;
  PointA?: member<[number, number, number]>;
  PointB?: member<[number, number, number]>;
  SlotA?: member<any>;
  SlotB?: member<any>;
  Shading?: member<any>;
}

const SegmentMesh: FC<SegmentMeshInput> = (props: SegmentMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Radius,
    PointA,
    PointB,
    SlotA,
    SlotB,
    Shading,
  } = props;

  return (
    <component
      name="FrooxEngine.SegmentMesh"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Radius"
        content={Radius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="PointA"
        content={PointA} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="PointB"
        content={PointB} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.TransformRelayRef`}
        name="SlotA"
        content={SlotA} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.TransformRelayRef`}
        name="SlotB"
        content={SlotB} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`}
        name="Shading"
        content={Shading} /* default: Smooth */
      />
    </component>
  );
};

export default SegmentMesh;
