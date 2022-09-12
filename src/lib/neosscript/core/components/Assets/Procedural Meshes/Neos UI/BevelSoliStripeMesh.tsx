import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BevelSoliStripeMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Width?: member<number>;
  Height?: member<number>;
  Thickness?: member<number>;
  SlantLeft?: member<number>;
  SlantRight?: member<number>;
  Relief?: member<boolean>;
}

const BevelSoliStripeMesh: FC<BevelSoliStripeMeshInput> = (
  props: BevelSoliStripeMeshInput
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
    Width,
    Height,
    Thickness,
    SlantLeft,
    SlantRight,
    Relief,
  } = props;

  return (
    <component
      name="FrooxEngine.BevelSoliStripeMesh"
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
        name="Width"
        content={Width} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Height"
        content={Height} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Thickness"
        content={Thickness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SlantLeft"
        content={SlantLeft} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SlantRight"
        content={SlantRight} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Relief"
        content={Relief} /* default: False */
      />
    </component>
  );
};

export default BevelSoliStripeMesh;
