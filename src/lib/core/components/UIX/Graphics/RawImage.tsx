import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface RawImageInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Texture?: member<any>;
  Material?: member<any>;
  Tint?: member<any>;
  UVRect?: member<any>;
  Orientation?: member<any>;
  PreserveAspect?: member<boolean>;
  InteractionTarget?: member<boolean>;
}

const RawImage: FC<RawImageInput> = (props: RawImageInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Texture,
    Material,
    Tint,
    UVRect,
    Orientation,
    PreserveAspect,
    InteractionTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.RawImage"
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
        type="FrooxEngine.AssetRef`1[FrooxEngine.ITexture2D]"
        name="Texture"
        content={Texture}
      />
      <Member
        type="FrooxEngine.AssetRef`1[FrooxEngine.Material]"
        name="Material"
        content={Material}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="Tint"
        content={Tint}
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
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PreserveAspect"
        content={PreserveAspect}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="InteractionTarget"
        content={InteractionTarget}
      />
    </component>
  );
};

export default RawImage;
