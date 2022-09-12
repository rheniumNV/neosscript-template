import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CubemapAssetMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Cubemap?: member<any>;
  Size?: member<any>;
  HasMipMaps?: member<any>;
  MipMapCount?: member<any>;
  MemoryBytes?: member<any>;
  FormattedMemoryBytes?: member<any>;
  Format?: member<any>;
  ActualLoadedVariant?: member<any>;
}

const CubemapAssetMetadata: FC<CubemapAssetMetadataInput> = (
  props: CubemapAssetMetadataInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Cubemap,
    Size,
    HasMipMaps,
    MipMapCount,
    MemoryBytes,
    FormattedMemoryBytes,
    Format,
    ActualLoadedVariant,
  } = props;

  return (
    <component
      name="FrooxEngine.CubemapAssetMetadata"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Cubemap]`}
        name="Cubemap"
        content={Cubemap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="Size"
        content={Size} /* default: FrooxEngine.RawOutput`1[System.Int32] */
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

export default CubemapAssetMetadata;
