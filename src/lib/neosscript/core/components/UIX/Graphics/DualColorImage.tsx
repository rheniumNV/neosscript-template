import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DualColorImageInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Sprite?: member<any>;
  Material?: member<any>;
  Tint?: member<[number, number, number, number]>;
  PreserveAspect?: member<boolean>;
  NineSliceSizing?: member<any>;
  InteractionTarget?: member<boolean>;
  __legacyZWrite?: member<boolean>;
  SecondaryTint?: member<[number, number, number, number]>;
}

const DualColorImage: FC<DualColorImageInput> = (
  props: DualColorImageInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Sprite,
    Material,
    Tint,
    PreserveAspect,
    NineSliceSizing,
    InteractionTarget,
    __legacyZWrite,
    SecondaryTint,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.DualColorImage"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Sprite]`}
        name="Sprite"
        content={Sprite} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`}
        name="Material"
        content={Material} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Tint"
        content={Tint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PreserveAspect"
        content={PreserveAspect} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.NineSliceSizing]`}
        name="NineSliceSizing"
        content={NineSliceSizing} /* default: TextureSize */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="InteractionTarget"
        content={InteractionTarget} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="__legacyZWrite"
        content={__legacyZWrite} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SecondaryTint"
        content={SecondaryTint} /* default: [0; 0; 0; 0] */
      />
    </component>
  );
};

export default DualColorImage;
