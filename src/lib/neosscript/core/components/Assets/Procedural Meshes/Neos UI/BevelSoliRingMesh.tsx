import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BevelSoliRingMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Arc?: member<number>;
  ArcOffset?: member<number>;
  Radius?: member<number>;
  Width?: member<number>;
  Thickness?: member<number>;
  Tilt?: member<number>;
  Segments?: member<number>;
}

const BevelSoliRingMesh: FC<BevelSoliRingMeshInput> = (
  props: BevelSoliRingMeshInput
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
    Arc,
    ArcOffset,
    Radius,
    Width,
    Thickness,
    Tilt,
    Segments,
  } = props;

  return (
    <component
      name="FrooxEngine.BevelSoliRingMesh"
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
        name="Arc"
        content={Arc} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ArcOffset"
        content={ArcOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Radius"
        content={Radius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Width"
        content={Width} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Thickness"
        content={Thickness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Tilt"
        content={Tilt} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Segments"
        content={Segments} /* default: 0 */
      />
    </component>
  );
};

export default BevelSoliRingMesh;
