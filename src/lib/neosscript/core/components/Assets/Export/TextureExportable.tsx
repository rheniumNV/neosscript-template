import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TextureExportableInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Texture?: member<any>;
}

const TextureExportable: FC<TextureExportableInput> = (
  props: TextureExportableInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Texture } =
    props;

  return (
    <component
      name="FrooxEngine.TextureExportable"
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
    </component>
  );
};

export default TextureExportable;
