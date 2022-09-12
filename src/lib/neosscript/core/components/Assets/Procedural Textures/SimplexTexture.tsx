import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SimplexTextureInput {
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
  Offset?: member<[number, number]>;
  Scale?: member<[number, number]>;
  Background?: member<[number, number, number, number]>;
  Foreground?: member<[number, number, number, number]>;
  Use3D?: member<boolean>;
  ZOffset?: member<number>;
}

const SimplexTexture: FC<SimplexTextureInput> = (
  props: SimplexTextureInput
) => {
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
    Offset,
    Scale,
    Background,
    Foreground,
    Use3D,
    ZOffset,
  } = props;

  return (
    <component
      name="FrooxEngine.SimplexTexture"
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
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Offset"
        content={Offset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Scale"
        content={Scale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Background"
        content={Background} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Foreground"
        content={Foreground} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Use3D"
        content={Use3D} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ZOffset"
        content={ZOffset} /* default: 0 */
      />
    </component>
  );
};

export default SimplexTexture;
