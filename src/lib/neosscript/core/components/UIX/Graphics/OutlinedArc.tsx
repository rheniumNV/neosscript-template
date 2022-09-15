import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface OutlinedArcInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Arc?: member<number>;
  Offset?: member<number>;
  OuterRadiusRatio?: member<number>;
  InnerRadiusRatio?: member<number>;
  FillColor?: member<[number, number, number, number]>;
  OutlineColor?: member<[number, number, number, number]>;
  OutlineThickness?: member<number>;
  Material?: member<any>;
}

const OutlinedArc: FC<OutlinedArcInput> = (props: OutlinedArcInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Arc,
    Offset,
    OuterRadiusRatio,
    InnerRadiusRatio,
    FillColor,
    OutlineColor,
    OutlineThickness,
    Material,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.OutlinedArc"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Arc"
        content={Arc} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Offset"
        content={Offset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OuterRadiusRatio"
        content={OuterRadiusRatio} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="InnerRadiusRatio"
        content={InnerRadiusRatio} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FillColor"
        content={FillColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="OutlineColor"
        content={OutlineColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OutlineThickness"
        content={OutlineThickness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`}
        name="Material"
        content={Material} /* default: ID0 */
      />
    </component>
  );
};

export default OutlinedArc;
