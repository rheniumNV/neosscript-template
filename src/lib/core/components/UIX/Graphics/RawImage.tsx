import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RawImageInput {
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
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.AssetRef`1[FrooxEngine.ITexture2D]"
        name="Texture"
        content={Texture} /* default: ID0 */
      />
      <Member
        type="FrooxEngine.AssetRef`1[FrooxEngine.Material]"
        name="Material"
        content={Material} /* default: ID0 */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="Tint"
        content={Tint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.Rect]"
        name="UVRect"
        content={UVRect} /* default: [X=0; Y=0; W=0; H=0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.RectOrientation]"
        name="Orientation"
        content={Orientation} /* default: Default */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PreserveAspect"
        content={PreserveAspect} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="InteractionTarget"
        content={InteractionTarget} /* default: False */
      />
    </component>
  );
};

export default RawImage;
