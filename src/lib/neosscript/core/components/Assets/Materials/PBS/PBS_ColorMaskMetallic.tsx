import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_ColorMaskMetallicInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  ColorMaskScale?: member<[number, number]>;
  ColorMaskOffset?: member<[number, number]>;
  ColorMask?: member<any>;
  AlbedoColor0?: member<[number, number, number, number]>;
  AlbedoColor1?: member<[number, number, number, number]>;
  AlbedoColor2?: member<[number, number, number, number]>;
  AlbedoColor3?: member<[number, number, number, number]>;
  AlbedoTexture?: member<any>;
  EmissiveColor0?: member<[number, number, number, number]>;
  EmissiveColor1?: member<[number, number, number, number]>;
  EmissiveColor2?: member<[number, number, number, number]>;
  EmissiveColor3?: member<[number, number, number, number]>;
  EmissiveMap?: member<any>;
  NormalMap?: member<any>;
  NormalScale?: member<number>;
  OcclusionMap?: member<any>;
  Transparent?: member<boolean>;
  ForceZWrite?: member<boolean>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  Metallic?: member<number>;
  Smoothness?: member<number>;
  MetallicMap?: member<any>;
  _regular?: member<any>;
  _transparent?: member<any>;
  _zwrite?: member<any>;
}

const PBS_ColorMaskMetallic: FC<PBS_ColorMaskMetallicInput> = (
  props: PBS_ColorMaskMetallicInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    TextureScale,
    TextureOffset,
    ColorMaskScale,
    ColorMaskOffset,
    ColorMask,
    AlbedoColor0,
    AlbedoColor1,
    AlbedoColor2,
    AlbedoColor3,
    AlbedoTexture,
    EmissiveColor0,
    EmissiveColor1,
    EmissiveColor2,
    EmissiveColor3,
    EmissiveMap,
    NormalMap,
    NormalScale,
    OcclusionMap,
    Transparent,
    ForceZWrite,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    Metallic,
    Smoothness,
    MetallicMap,
    _regular,
    _transparent,
    _zwrite,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_ColorMaskMetallic"
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
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ColorMaskScale"
        content={ColorMaskScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ColorMaskOffset"
        content={ColorMaskOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ColorMask"
        content={ColorMask} /* default: ID0 */
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
        name="AlbedoTexture"
        content={AlbedoTexture} /* default: ID0 */
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
        name="EmissiveMap"
        content={EmissiveMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NormalMap"
        content={NormalMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalScale"
        content={NormalScale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OcclusionMap"
        content={OcclusionMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Transparent"
        content={Transparent} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ForceZWrite"
        content={ForceZWrite} /* default: False */
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
        name="Metallic"
        content={Metallic} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothness"
        content={Smoothness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MetallicMap"
        content={MetallicMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_regular"
        content={_regular} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_transparent"
        content={_transparent} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_zwrite"
        content={_zwrite} /* default: ID0 */
      />
    </component>
  );
};

export default PBS_ColorMaskMetallic;
