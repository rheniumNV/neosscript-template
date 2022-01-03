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
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Arc"
        content={Arc}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Offset"
        content={Offset}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="OuterRadiusRatio"
        content={OuterRadiusRatio}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="InnerRadiusRatio"
        content={InnerRadiusRatio}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="FillColor"
        content={FillColor}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="OutlineColor"
        content={OutlineColor}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="OutlineThickness"
        content={OutlineThickness}
      />
      <Member
        type="FrooxEngine.AssetRef`1[FrooxEngine.Material]"
        name="Material"
        content={Material}
      />
    </component>
  );
};

export default OutlinedArc;
