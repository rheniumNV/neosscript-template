import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ITexture2DAssetMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Texture?: member<any>;
  Size?: member<any>;
  Width?: member<any>;
  Height?: member<any>;
}

const ITexture2DAssetMetadata: FC<ITexture2DAssetMetadataInput> = (
  props: ITexture2DAssetMetadataInput
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
  } = props;

  return (
    <component
      name="FrooxEngine.ITexture2DAssetMetadata"
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
    </component>
  );
};

export default ITexture2DAssetMetadata;
