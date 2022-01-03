import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Arc?: member<number>;
  Offset?: member<number>;
  OuterRadiusRatio?: member<number>;
  InnerRadiusRatio?: member<number>;
  FillColor?: member<any>;
  OutlineColor?: member<any>;
  OutlineThickness?: member<number>;
  Material?: member<any>;
}

const OutlinedArc: FC<OutlinedArcInput> = (props: OutlinedArcInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
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
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Arc"
        content={Arc} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Offset"
        content={Offset} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="OuterRadiusRatio"
        content={OuterRadiusRatio} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="InnerRadiusRatio"
        content={InnerRadiusRatio} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="FillColor"
        content={FillColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="OutlineColor"
        content={OutlineColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="OutlineThickness"
        content={OutlineThickness} /* default: 0 */
      />
      <Member
        type="FrooxEngine.AssetRef`1[FrooxEngine.Material]"
        name="Material"
        content={Material} /* default: ID0 */
      />
    </component>
  );
};

export default OutlinedArc;
