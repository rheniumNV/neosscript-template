import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_MultiUV_SpecularInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  AlbedoScale?: member<[number, number]>;
  AlbedoOffset?: member<[number, number]>;
  AlbedoUV?: member<number>;
  EmissionMapScale?: member<[number, number]>;
  EmissionMapOffset?: member<[number, number]>;
  EmissionMapUV?: member<number>;
  NormalMapScale?: member<[number, number]>;
  NormalMapOffset?: member<[number, number]>;
  NormalMapUV?: member<number>;
  OcclusionMapScale?: member<[number, number]>;
  OcclusionMapOffset?: member<[number, number]>;
  OcclusionMapUV?: member<number>;
  SecondaryAlbedoScale?: member<[number, number]>;
  SecondaryAlbedoOffset?: member<[number, number]>;
  SecondaryAlbedoUV?: member<number>;
  SecondaryEmissionMapScale?: member<[number, number]>;
  SecondaryEmissionMapOffset?: member<[number, number]>;
  SecondaryEmissionMapUV?: member<number>;
  AlbedoColor?: member<[number, number, number, number]>;
  AlbedoTexture?: member<any>;
  EmissiveColor?: member<[number, number, number, number]>;
  EmissiveMap?: member<any>;
  NormalMap?: member<any>;
  NormalScale?: member<number>;
  OcclusionMap?: member<any>;
  SecondaryAlbedoTexture?: member<any>;
  SecondaryEmissiveColor?: member<[number, number, number, number]>;
  SecondaryEmissiveMap?: member<any>;
  Culling?: member<any>;
  AlphaHandling?: member<any>;
  AlphaClip?: member<number>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  SpecularColor?: member<[number, number, number, number]>;
  SpecularMap?: member<any>;
  SpecularMapScale?: member<[number, number]>;
  SpecularMapOffset?: member<[number, number]>;
  SpecularMapUV?: member<number>;
}

const PBS_MultiUV_Specular: FC<PBS_MultiUV_SpecularInput> = (
  props: PBS_MultiUV_SpecularInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    AlbedoScale,
    AlbedoOffset,
    AlbedoUV,
    EmissionMapScale,
    EmissionMapOffset,
    EmissionMapUV,
    NormalMapScale,
    NormalMapOffset,
    NormalMapUV,
    OcclusionMapScale,
    OcclusionMapOffset,
    OcclusionMapUV,
    SecondaryAlbedoScale,
    SecondaryAlbedoOffset,
    SecondaryAlbedoUV,
    SecondaryEmissionMapScale,
    SecondaryEmissionMapOffset,
    SecondaryEmissionMapUV,
    AlbedoColor,
    AlbedoTexture,
    EmissiveColor,
    EmissiveMap,
    NormalMap,
    NormalScale,
    OcclusionMap,
    SecondaryAlbedoTexture,
    SecondaryEmissiveColor,
    SecondaryEmissiveMap,
    Culling,
    AlphaHandling,
    AlphaClip,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    SpecularColor,
    SpecularMap,
    SpecularMapScale,
    SpecularMapOffset,
    SpecularMapUV,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_MultiUV_Specular"
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
        name="AlbedoScale"
        content={AlbedoScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="AlbedoOffset"
        content={AlbedoOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="AlbedoUV"
        content={AlbedoUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="EmissionMapScale"
        content={EmissionMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="EmissionMapOffset"
        content={EmissionMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="EmissionMapUV"
        content={EmissionMapUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NormalMapScale"
        content={NormalMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NormalMapOffset"
        content={NormalMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="NormalMapUV"
        content={NormalMapUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OcclusionMapScale"
        content={OcclusionMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OcclusionMapOffset"
        content={OcclusionMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="OcclusionMapUV"
        content={OcclusionMapUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="SecondaryAlbedoScale"
        content={SecondaryAlbedoScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="SecondaryAlbedoOffset"
        content={SecondaryAlbedoOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="SecondaryAlbedoUV"
        content={SecondaryAlbedoUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="SecondaryEmissionMapScale"
        content={SecondaryEmissionMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="SecondaryEmissionMapOffset"
        content={SecondaryEmissionMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="SecondaryEmissionMapUV"
        content={SecondaryEmissionMapUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AlbedoColor"
        content={AlbedoColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="AlbedoTexture"
        content={AlbedoTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissiveColor"
        content={EmissiveColor} /* default: [0; 0; 0; 0] */
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="SecondaryAlbedoTexture"
        content={SecondaryAlbedoTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SecondaryEmissiveColor"
        content={SecondaryEmissiveColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="SecondaryEmissiveMap"
        content={SecondaryEmissiveMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`}
        name="Culling"
        content={Culling} /* default: Off */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AlphaHandling]`}
        name="AlphaHandling"
        content={AlphaHandling} /* default: Opaque */
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SpecularColor"
        content={SpecularColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="SpecularMap"
        content={SpecularMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="SpecularMapScale"
        content={SpecularMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="SpecularMapOffset"
        content={SpecularMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="SpecularMapUV"
        content={SpecularMapUV} /* default: 0 */
      />
    </component>
  );
};

export default PBS_MultiUV_Specular;
