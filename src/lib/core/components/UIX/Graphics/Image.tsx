import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ImageInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Sprite?: member<any>;
  Material?: member<any>;
  Tint?: member<any>;
  PreserveAspect?: member<boolean>;
  NineSliceSizing?: member<any>;
  InteractionTarget?: member<boolean>;
  __legacyZWrite?: member<boolean>;
}

const Image: FC<ImageInput> = (props: ImageInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Sprite,
    Material,
    Tint,
    PreserveAspect,
    NineSliceSizing,
    InteractionTarget,
    __legacyZWrite,
  } = props;

  return (
    <component name="FrooxEngine.UIX.Image" id={id} persistentId={persistentId}>
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
        type="FrooxEngine.AssetRef`1[FrooxEngine.Sprite]"
        name="Sprite"
        content={Sprite}
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
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PreserveAspect"
        content={PreserveAspect}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.NineSliceSizing]"
        name="NineSliceSizing"
        content={NineSliceSizing}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="InteractionTarget"
        content={InteractionTarget}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="__legacyZWrite"
        content={__legacyZWrite}
      />
    </component>
  );
};

export default Image;
