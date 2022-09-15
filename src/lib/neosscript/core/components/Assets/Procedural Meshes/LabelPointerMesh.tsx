import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LabelPointerMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  LabelPoint?: member<[number, number, number]>;
  TargetPoint?: member<[number, number, number]>;
  LabelRotation?: member<any>;
  LabelWidth?: member<number>;
  Width?: member<number>;
  ExpandLerp?: member<number>;
  DualSided?: member<boolean>;
}

const LabelPointerMesh: FC<LabelPointerMeshInput> = (
  props: LabelPointerMeshInput
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
    LabelPoint,
    TargetPoint,
    LabelRotation,
    LabelWidth,
    Width,
    ExpandLerp,
    DualSided,
  } = props;

  return (
    <component
      name="FrooxEngine.LabelPointerMesh"
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
        name="LabelPoint"
        content={LabelPoint} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetPoint"
        content={TargetPoint} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="LabelRotation"
        content={LabelRotation} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LabelWidth"
        content={LabelWidth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Width"
        content={Width} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ExpandLerp"
        content={ExpandLerp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DualSided"
        content={DualSided} /* default: False */
      />
    </component>
  );
};

export default LabelPointerMesh;
