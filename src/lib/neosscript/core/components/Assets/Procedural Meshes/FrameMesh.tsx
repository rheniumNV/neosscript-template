import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FrameMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  ContentSize?: member<[number, number]>;
  Thickness?: member<number>;
  UVScale?: member<[number, number]>;
}

const FrameMesh: FC<FrameMeshInput> = (props: FrameMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    ContentSize,
    Thickness,
    UVScale,
  } = props;

  return (
    <component
      name="FrooxEngine.FrameMesh"
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
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ContentSize"
        content={ContentSize} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Thickness"
        content={Thickness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="UVScale"
        content={UVScale} /* default: [0; 0] */
      />
    </component>
  );
};

export default FrameMesh;
