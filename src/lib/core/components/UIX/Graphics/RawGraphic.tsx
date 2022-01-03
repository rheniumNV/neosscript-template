import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface RawGraphicInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Material?: member<any>;
  PropertyBlock?: member<any>;
  FillRect?: member<any>;
  Color?: member<any>;
  UVRect?: member<any>;
  Orientation?: member<any>;
  Normal?: member<any>;
  Tangent?: member<any>;
  HideWithNoMaterial?: member<boolean>;
  PreserveUVAspectRatio?: member<boolean>;
  InteractionTarget?: member<boolean>;
}

const RawGraphic: FC<RawGraphicInput> = (props: RawGraphicInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Material,
    PropertyBlock,
    FillRect,
    Color,
    UVRect,
    Orientation,
    Normal,
    Tangent,
    HideWithNoMaterial,
    PreserveUVAspectRatio,
    InteractionTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.RawGraphic"
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
        type="FrooxEngine.AssetRef`1[FrooxEngine.Material]"
        name="Material"
        content={Material}
      />
      <Member
        type="FrooxEngine.AssetRef`1[FrooxEngine.MaterialPropertyBlock]"
        name="PropertyBlock"
        content={PropertyBlock}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.Rect]"
        name="FillRect"
        content={FillRect}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="Color"
        content={Color}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.Rect]"
        name="UVRect"
        content={UVRect}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.RectOrientation]"
        name="Orientation"
        content={Orientation}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Nullable`1[BaseX.float3]]"
        name="Normal"
        content={Normal}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Nullable`1[BaseX.float4]]"
        name="Tangent"
        content={Tangent}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="HideWithNoMaterial"
        content={HideWithNoMaterial}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PreserveUVAspectRatio"
        content={PreserveUVAspectRatio}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="InteractionTarget"
        content={InteractionTarget}
      />
    </component>
  );
};

export default RawGraphic;
