import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UVTextureInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  FilterMode?: member<any>;
  AnisotropicLevel?: member<number>;
  WrapModeU?: member<any>;
  WrapModeV?: member<any>;
  MipmapBias?: member<number>;
  Size?: member<[number, number]>;
  Mipmaps?: member<boolean>;
  Format?: member<any>;
}

const UVTexture: FC<UVTextureInput> = (props: UVTextureInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    FilterMode,
    AnisotropicLevel,
    WrapModeU,
    WrapModeV,
    MipmapBias,
    Size,
    Mipmaps,
    Format,
  } = props;

  return (
    <component
      name="FrooxEngine.UVTexture"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HighPriorityIntegration"
        content={HighPriorityIntegration} /* default: False */
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
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MipmapBias"
        content={MipmapBias} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.int2]`}
        name="Size"
        content={Size} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Mipmaps"
        content={Mipmaps} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[CodeX.TextureFormat]`}
        name="Format"
        content={Format} /* default: Unknown */
      />
    </component>
  );
};

export default UVTexture;
