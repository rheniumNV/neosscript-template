import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBSLerpMetallicInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Lerp?: member<number>;
  LerpTexture?: member<any>;
  LerpTextureScale?: member<[number, number]>;
  LerpTextureOffset?: member<[number, number]>;
  Texture0Scale?: member<[number, number]>;
  Texture0Offset?: member<[number, number]>;
  Texture1Scale?: member<[number, number]>;
  Texture1Offset?: member<[number, number]>;
  AlbedoColor0?: member<[number, number, number, number]>;
  AlbedoColor1?: member<[number, number, number, number]>;
  AlbedoTexture0?: member<any>;
  AlbedoTexture1?: member<any>;
  EmissiveColor0?: member<[number, number, number, number]>;
  EmissiveColor1?: member<[number, number, number, number]>;
  EmissiveMap0?: member<any>;
  EmissiveMap1?: member<any>;
  NormalMap0?: member<any>;
  NormalMap1?: member<any>;
  NormalScale0?: member<number>;
  NormalScale1?: member<number>;
  OcclusionMap0?: member<any>;
  OcclusionMap1?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  Metallic0?: member<number>;
  Metallic1?: member<number>;
  Smoothness0?: member<number>;
  Smoothness1?: member<number>;
  MetallicMap0?: member<any>;
  MetallicMap1?: member<any>;
}

const PBSLerpMetallic: FC<PBSLerpMetallicInput> = (
  props: PBSLerpMetallicInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    Lerp,
    LerpTexture,
    LerpTextureScale,
    LerpTextureOffset,
    Texture0Scale,
    Texture0Offset,
    Texture1Scale,
    Texture1Offset,
    AlbedoColor0,
    AlbedoColor1,
    AlbedoTexture0,
    AlbedoTexture1,
    EmissiveColor0,
    EmissiveColor1,
    EmissiveMap0,
    EmissiveMap1,
    NormalMap0,
    NormalMap1,
    NormalScale0,
    NormalScale1,
    OcclusionMap0,
    OcclusionMap1,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    Metallic0,
    Metallic1,
    Smoothness0,
    Smoothness1,
    MetallicMap0,
    MetallicMap1,
  } = props;

  return (
    <component
      name="FrooxEngine.PBSLerpMetallic"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Lerp"
        content={Lerp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="LerpTexture"
        content={LerpTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="LerpTextureScale"
        content={LerpTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="LerpTextureOffset"
        content={LerpTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Texture0Scale"
        content={Texture0Scale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Texture0Offset"
        content={Texture0Offset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Texture1Scale"
        content={Texture1Scale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Texture1Offset"
        content={Texture1Offset} /* default: [0; 0] */
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
        name="NormalMap0"
        content={NormalMap0} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NormalMap1"
        content={NormalMap1} /* default: ID0 */
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OcclusionMap0"
        content={OcclusionMap0} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OcclusionMap1"
        content={OcclusionMap1} /* default: ID0 */
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
        name="Smoothness0"
        content={Smoothness0} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothness1"
        content={Smoothness1} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MetallicMap0"
        content={MetallicMap0} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MetallicMap1"
        content={MetallicMap1} /* default: ID0 */
      />
    </component>
  );
};

export default PBSLerpMetallic;
