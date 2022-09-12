import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SpiralTubeMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  TubeRadius?: member<number>;
  SpiralRadius?: member<number>;
  UpwardTrend?: member<number>;
  Sides?: member<number>;
  DistanceBetweenRings?: member<number>;
  Length?: member<number>;
  Ends?: member<any>;
  Shading?: member<any>;
}

const SpiralTubeMesh: FC<SpiralTubeMeshInput> = (
  props: SpiralTubeMeshInput
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
    TubeRadius,
    SpiralRadius,
    UpwardTrend,
    Sides,
    DistanceBetweenRings,
    Length,
    Ends,
    Shading,
  } = props;

  return (
    <component
      name="FrooxEngine.SpiralTubeMesh"
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
        name="TubeRadius"
        content={TubeRadius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SpiralRadius"
        content={SpiralRadius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="UpwardTrend"
        content={UpwardTrend} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Sides"
        content={Sides} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DistanceBetweenRings"
        content={DistanceBetweenRings} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Length"
        content={Length} /* default: 0 */
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

export default SpiralTubeMesh;
