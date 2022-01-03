import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TiledRawImageInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Texture?: member<any>;
  Material?: member<any>;
  Tint?: member<any>;
  SizeBasis?: member<any>;
  TileSize?: member<any>;
  TileOffset?: member<any>;
  InteractionTarget?: member<boolean>;
}

const TiledRawImage: FC<TiledRawImageInput> = (props: TiledRawImageInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Texture,
    Material,
    Tint,
    SizeBasis,
    TileSize,
    TileOffset,
    InteractionTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.TiledRawImage"
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
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.TiledRawImage+TileSizeBasis]"
        name="SizeBasis"
        content={SizeBasis}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="TileSize"
        content={TileSize}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="TileOffset"
        content={TileOffset}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="InteractionTarget"
        content={InteractionTarget}
      />
    </component>
  );
};

export default TiledRawImage;
