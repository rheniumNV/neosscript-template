import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

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
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Texture?: member<any>;
  Material?: member<any>;
  Tint?: member<[number, number, number, number]>;
  SizeBasis?: member<any>;
  TileSize?: member<[number, number]>;
  TileOffset?: member<[number, number]>;
  InteractionTarget?: member<boolean>;
}

const TiledRawImage: FC<TiledRawImageInput> = (props: TiledRawImageInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
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
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Texture"
        content={Texture} /* default: ID0 */
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.TiledRawImage+TileSizeBasis]`}
        name="SizeBasis"
        content={SizeBasis} /* default: Absolute */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TileSize"
        content={TileSize} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TileOffset"
        content={TileOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="InteractionTarget"
        content={InteractionTarget} /* default: False */
      />
    </component>
  );
};

export default TiledRawImage;
