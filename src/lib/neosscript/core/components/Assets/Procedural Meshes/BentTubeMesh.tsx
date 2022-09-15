import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BentTubeMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Radius?: member<number>;
  Sides?: member<number>;
  Segments?: member<number>;
  StartPoint?: member<[number, number, number]>;
  DirectTargetPoint?: member<[number, number, number]>;
  ActualTargetPoint?: member<[number, number, number]>;
  StartPointColor?: member<[number, number, number, number]>;
  EndPointColor?: member<[number, number, number, number]>;
  Ends?: member<any>;
  Shading?: member<any>;
}

const BentTubeMesh: FC<BentTubeMeshInput> = (props: BentTubeMeshInput) => {
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
    Sides,
    Segments,
    StartPoint,
    DirectTargetPoint,
    ActualTargetPoint,
    StartPointColor,
    EndPointColor,
    Ends,
    Shading,
  } = props;

  return (
    <component
      name="FrooxEngine.BentTubeMesh"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Sides"
        content={Sides} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Segments"
        content={Segments} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="StartPoint"
        content={StartPoint} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="DirectTargetPoint"
        content={DirectTargetPoint} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="ActualTargetPoint"
        content={ActualTargetPoint} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="StartPointColor"
        content={StartPointColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EndPointColor"
        content={EndPointColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Ends]`}
        name="Ends"
        content={Ends} /* default: Open */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`}
        name="Shading"
        content={Shading} /* default: Smooth */
      />
    </component>
  );
};

export default BentTubeMesh;
