import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Texture2DAssetMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Texture?: member<any>;
  Size?: member<any>;
  Width?: member<any>;
  Height?: member<any>;
  HasMipMaps?: member<any>;
  MipMapCount?: member<any>;
  MemoryBytes?: member<any>;
  FormattedMemoryBytes?: member<any>;
  Format?: member<any>;
  ActualLoadedVariant?: member<any>;
}

const Texture2DAssetMetadata: FC<Texture2DAssetMetadataInput> = (
  props: Texture2DAssetMetadataInput
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
    HasMipMaps,
    MipMapCount,
    MemoryBytes,
    FormattedMemoryBytes,
    Format,
    ActualLoadedVariant,
  } = props;

  return (
    <component
      name="FrooxEngine.Texture2DAssetMetadata"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`}
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
        name="HasMipMaps"
        content={
          HasMipMaps
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="MipMapCount"
        content={
          MipMapCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int64]`}
        name="MemoryBytes"
        content={
          MemoryBytes
        } /* default: FrooxEngine.RawOutput`1[System.Int64] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="FormattedMemoryBytes"
        content={
          FormattedMemoryBytes
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[CodeX.TextureFormat]`}
        name="Format"
        content={
          Format
        } /* default: FrooxEngine.RawOutput`1[CodeX.TextureFormat] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="ActualLoadedVariant"
        content={
          ActualLoadedVariant
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
    </component>
  );
};

export default Texture2DAssetMetadata;
