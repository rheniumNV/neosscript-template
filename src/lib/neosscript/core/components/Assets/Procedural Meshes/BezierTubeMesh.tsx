import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BezierTubeMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Radius?: member<number>;
  Points?: member<any>;
  SegmentPoints?: member<number>;
  StepsPerUnitLength?: member<number>;
}

const BezierTubeMesh: FC<BezierTubeMeshInput> = (
  props: BezierTubeMeshInput
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
    Radius,
    Points,
    SegmentPoints,
    StepsPerUnitLength,
  } = props;

  return (
    <component
      name="FrooxEngine.BezierTubeMesh"
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
        type={`FrooxEngine.SyncCurve\`1[BaseX.float3]`}
        name="Points"
        content={Points} /* default: FrooxEngine.SyncCurve`1[BaseX.float3] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="SegmentPoints"
        content={SegmentPoints} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="StepsPerUnitLength"
        content={StepsPerUnitLength} /* default: 0 */
      />
    </component>
  );
};

export default BezierTubeMesh;
