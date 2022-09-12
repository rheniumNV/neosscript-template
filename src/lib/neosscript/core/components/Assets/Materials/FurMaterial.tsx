import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FurMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Color?: member<[number, number, number, number]>;
  SpecularColor?: member<[number, number, number, number]>;
  Shininess?: member<number>;
  Gloss?: member<number>;
  RimColor?: member<[number, number, number, number]>;
  RimPower?: member<number>;
  FurLength?: member<number>;
  FurHardness?: member<number>;
  FurThinness?: member<number>;
  FurShading?: member<number>;
  FurColoring?: member<number>;
  Base?: member<any>;
  NormalMap?: member<any>;
  Noise?: member<any>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  AlphaCutoff?: member<number>;
  ForceGlobal?: member<[number, number, number, number]>;
  ForceLocal?: member<[number, number, number, number]>;
  RenderQueue?: member<number>;
}

const FurMaterial: FC<FurMaterialInput> = (props: FurMaterialInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    Color,
    SpecularColor,
    Shininess,
    Gloss,
    RimColor,
    RimPower,
    FurLength,
    FurHardness,
    FurThinness,
    FurShading,
    FurColoring,
    Base,
    NormalMap,
    Noise,
    TextureScale,
    TextureOffset,
    AlphaCutoff,
    ForceGlobal,
    ForceLocal,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.FurMaterial"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_shader"
        content={_shader} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Color"
        content={Color} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SpecularColor"
        content={SpecularColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Shininess"
        content={Shininess} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Gloss"
        content={Gloss} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="RimColor"
        content={RimColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RimPower"
        content={RimPower} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FurLength"
        content={FurLength} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FurHardness"
        content={FurHardness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FurThinness"
        content={FurThinness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FurShading"
        content={FurShading} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FurColoring"
        content={FurColoring} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Base"
        content={Base} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NormalMap"
        content={NormalMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Noise"
        content={Noise} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TextureScale"
        content={TextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TextureOffset"
        content={TextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AlphaCutoff"
        content={AlphaCutoff} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="ForceGlobal"
        content={ForceGlobal} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="ForceLocal"
        content={ForceLocal} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
    </component>
  );
};

export default FurMaterial;
