import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RenderTextureProviderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Size?: member<[number, number]>;
  Depth?: member<number>;
  FilterMode?: member<any>;
  AnisotropicLevel?: member<number>;
  WrapModeU?: member<any>;
  WrapModeV?: member<any>;
}

const RenderTextureProvider: FC<RenderTextureProviderInput> = (
  props: RenderTextureProviderInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Size,
    Depth,
    FilterMode,
    AnisotropicLevel,
    WrapModeU,
    WrapModeV,
  } = props;

  return (
    <component
      name="FrooxEngine.RenderTextureProvider"
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
        type={`FrooxEngine.Sync\`1[BaseX.int2]`}
        name="Size"
        content={Size} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Depth"
        content={Depth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`}
        name="FilterMode"
        content={FilterMode} /* default: Point */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="AnisotropicLevel"
        content={AnisotropicLevel} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`}
        name="WrapModeU"
        content={WrapModeU} /* default: Repeat */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`}
        name="WrapModeV"
        content={WrapModeV} /* default: Repeat */
      />
    </component>
  );
};

export default RenderTextureProvider;
