import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VideoTextureAssetMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Texture?: member<any>;
  Size?: member<any>;
  Width?: member<any>;
  Height?: member<any>;
  HasAlpha?: member<any>;
  Length?: member<any>;
  PlaybackEngine?: member<any>;
}

const VideoTextureAssetMetadata: FC<VideoTextureAssetMetadataInput> = (
  props: VideoTextureAssetMetadataInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Texture,
    Size,
    Width,
    Height,
    HasAlpha,
    Length,
    PlaybackEngine,
  } = props;

  return (
    <component
      name="FrooxEngine.VideoTextureAssetMetadata"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.VideoTexture]`}
        name="Texture"
        content={Texture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[BaseX.int2]`}
        name="Size"
        content={Size} /* default: FrooxEngine.RawOutput`1[BaseX.int2] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="Width"
        content={Width} /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="Height"
        content={Height} /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasAlpha"
        content={
          HasAlpha
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="Length"
        content={Length} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="PlaybackEngine"
        content={
          PlaybackEngine
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
    </component>
  );
};

export default VideoTextureAssetMetadata;
