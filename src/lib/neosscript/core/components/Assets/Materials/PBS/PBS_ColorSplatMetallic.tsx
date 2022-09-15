import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_ColorSplatMetallicInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  ColorMap?: member<any>;
  ColorMapScale?: member<[number, number]>;
  ColorMapOffset?: member<[number, number]>;
  PackedHeightMap?: member<any>;
  HeightTransitionRange?: member<number>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  AlbedoColor0?: member<[number, number, number, number]>;
  AlbedoColor1?: member<[number, number, number, number]>;
  AlbedoColor2?: member<[number, number, number, number]>;
  AlbedoColor3?: member<[number, number, number, number]>;
  AlbedoTexture0?: member<any>;
  AlbedoTexture1?: member<any>;
  AlbedoTexture2?: member<any>;
  AlbedoTexture3?: member<any>;
  EmissiveColor0?: member<[number, number, number, number]>;
  EmissiveColor1?: member<[number, number, number, number]>;
  EmissiveColor2?: member<[number, number, number, number]>;
  EmissiveColor3?: member<[number, number, number, number]>;
  EmissiveMap0?: member<any>;
  EmissiveMap1?: member<any>;
  EmissiveMap2?: member<any>;
  EmissiveMap3?: member<any>;
  PackedEmissionMap?: member<any>;
  PackedNormalMap01?: member<any>;
  PackedNormalMap23?: member<any>;
  NormalScale0?: member<number>;
  NormalScale1?: member<number>;
  NormalScale2?: member<number>;
  NormalScale3?: member<number>;
  AlphaClip?: member<number>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  Metallic0?: member<number>;
  Metallic1?: member<number>;
  Metallic2?: member<number>;
  Metallic3?: member<number>;
  Smoothness0?: member<number>;
  Smoothness1?: member<number>;
  Smoothness2?: member<number>;
  Smoothness3?: member<number>;
  MetallicMap01?: member<any>;
  MetallicMap23?: member<any>;
}

const PBS_ColorSplatMetallic: FC<PBS_ColorSplatMetallicInput> = (
  props: PBS_ColorSplatMetallicInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    ColorMap,
    ColorMapScale,
    ColorMapOffset,
    PackedHeightMap,
    HeightTransitionRange,
    TextureScale,
    TextureOffset,
    AlbedoColor0,
    AlbedoColor1,
    AlbedoColor2,
    AlbedoColor3,
    AlbedoTexture0,
    AlbedoTexture1,
    AlbedoTexture2,
    AlbedoTexture3,
    EmissiveColor0,
    EmissiveColor1,
    EmissiveColor2,
    EmissiveColor3,
    EmissiveMap0,
    EmissiveMap1,
    EmissiveMap2,
    EmissiveMap3,
    PackedEmissionMap,
    PackedNormalMap01,
    PackedNormalMap23,
    NormalScale0,
    NormalScale1,
    NormalScale2,
    NormalScale3,
    AlphaClip,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    Metallic0,
    Metallic1,
    Metallic2,
    Metallic3,
    Smoothness0,
    Smoothness1,
    Smoothness2,
    Smoothness3,
    MetallicMap01,
    MetallicMap23,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_ColorSplatMetallic"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ColorMap"
        content={ColorMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ColorMapScale"
        content={ColorMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ColorMapOffset"
        content={ColorMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="PackedHeightMap"
        content={PackedHeightMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeightTransitionRange"
        content={HeightTransitionRange} /* default: 0 */
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AlbedoColor0"
        content={AlbedoColor0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AlbedoColor1"
        content={AlbedoColor1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AlbedoColor2"
        content={AlbedoColor2} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AlbedoColor3"
        content={AlbedoColor3} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="AlbedoTexture0"
        content={AlbedoTexture0} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="AlbedoTexture1"
        content={AlbedoTexture1} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="AlbedoTexture2"
        content={AlbedoTexture2} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="AlbedoTexture3"
        content={AlbedoTexture3} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissiveColor0"
        content={EmissiveColor0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissiveColor1"
        content={EmissiveColor1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissiveColor2"
        content={EmissiveColor2} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissiveColor3"
        content={EmissiveColor3} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="EmissiveMap0"
        content={EmissiveMap0} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="EmissiveMap1"
        content={EmissiveMap1} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="EmissiveMap2"
        content={EmissiveMap2} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="EmissiveMap3"
        content={EmissiveMap3} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="PackedEmissionMap"
        content={PackedEmissionMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="PackedNormalMap01"
        content={PackedNormalMap01} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="PackedNormalMap23"
        content={PackedNormalMap23} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalScale0"
        content={NormalScale0} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalScale1"
        content={NormalScale1} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalScale2"
        content={NormalScale2} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalScale3"
        content={NormalScale3} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AlphaClip"
        content={AlphaClip} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OffsetFactor"
        content={OffsetFactor} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OffsetUnits"
        content={OffsetUnits} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Metallic0"
        content={Metallic0} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Metallic1"
        content={Metallic1} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Metallic2"
        content={Metallic2} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Metallic3"
        content={Metallic3} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothness0"
        content={Smoothness0} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothness1"
        content={Smoothness1} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothness2"
        content={Smoothness2} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothness3"
        content={Smoothness3} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MetallicMap01"
        content={MetallicMap01} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MetallicMap23"
        content={MetallicMap23} /* default: ID0 */
      />
    </component>
  );
};

export default PBS_ColorSplatMetallic;
