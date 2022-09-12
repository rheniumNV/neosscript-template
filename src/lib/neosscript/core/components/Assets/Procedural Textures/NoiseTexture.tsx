import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface NoiseTextureInput {
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
  Seed?: member<number>;
  Monochrome?: member<boolean>;
  MonochromeMax?: member<[number, number, number, number]>;
  MonochromeMin?: member<[number, number, number, number]>;
  Bias?: member<number>;
  Gain?: member<number>;
  Clamp?: member<boolean>;
}

const NoiseTexture: FC<NoiseTextureInput> = (props: NoiseTextureInput) => {
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
    Seed,
    Monochrome,
    MonochromeMax,
    MonochromeMin,
    Bias,
    Gain,
    Clamp,
  } = props;

  return (
    <component
      name="FrooxEngine.NoiseTexture"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Seed"
        content={Seed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Monochrome"
        content={Monochrome} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="MonochromeMax"
        content={MonochromeMax} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="MonochromeMin"
        content={MonochromeMin} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Bias"
        content={Bias} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Gain"
        content={Gain} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Clamp"
        content={Clamp} /* default: False */
      />
    </component>
  );
};

export default NoiseTexture;
