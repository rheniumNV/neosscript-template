import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BallisticPathMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  InitialPosition?: member<[number, number, number]>;
  InitialVelocity?: member<[number, number, number]>;
  Gravity?: member<[number, number, number]>;
  Drag?: member<number>;
  Mode?: member<any>;
  StepSize?: member<number>;
  TotalUnits?: member<number>;
  Shape?: member<any>;
  Size?: member<number>;
  Points?: member<number>;
  DualSided?: member<boolean>;
  Up?: member<[number, number, number]>;
  DistanceSizeGrowth?: member<number>;
  MinGrownSize?: member<number>;
  MaxGrownSize?: member<number>;
  UseLastSegment?: member<boolean>;
  LastSegmentPosition?: member<[number, number, number]>;
}

const BallisticPathMesh: FC<BallisticPathMeshInput> = (
  props: BallisticPathMeshInput
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
    InitialPosition,
    InitialVelocity,
    Gravity,
    Drag,
    Mode,
    StepSize,
    TotalUnits,
    Shape,
    Size,
    Points,
    DualSided,
    Up,
    DistanceSizeGrowth,
    MinGrownSize,
    MaxGrownSize,
    UseLastSegment,
    LastSegmentPosition,
  } = props;

  return (
    <component
      name="FrooxEngine.BallisticPathMesh"
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
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="InitialPosition"
        content={InitialPosition} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="InitialVelocity"
        content={InitialVelocity} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Gravity"
        content={Gravity} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Drag"
        content={Drag} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BallisticPathMesh+StepMode]`}
        name="Mode"
        content={Mode} /* default: Time */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="StepSize"
        content={StepSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TotalUnits"
        content={TotalUnits} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BallisticPathMesh+PathShape]`}
        name="Shape"
        content={Shape} /* default: Stripe */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Size"
        content={Size} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Points"
        content={Points} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DualSided"
        content={DualSided} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Up"
        content={Up} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DistanceSizeGrowth"
        content={DistanceSizeGrowth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinGrownSize"
        content={MinGrownSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxGrownSize"
        content={MaxGrownSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseLastSegment"
        content={UseLastSegment} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="LastSegmentPosition"
        content={LastSegmentPosition} /* default: [0; 0; 0] */
      />
    </component>
  );
};

export default BallisticPathMesh;
