import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_DisplaceMetallicInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  AlbedoColor?: member<[number, number, number, number]>;
  AlbedoTexture?: member<any>;
  EmissiveColor?: member<[number, number, number, number]>;
  EmissiveMap?: member<any>;
  NormalMap?: member<any>;
  NormalScale?: member<number>;
  OcclusionMap?: member<any>;
  VertexDisplaceMap?: member<any>;
  VertexDisplaceMagnitude?: member<number>;
  VertexDisplaceBias?: member<number>;
  VertexDisplaceMapScale?: member<[number, number]>;
  VertexDisplaceMapOffset?: member<[number, number]>;
  UVDisplaceMap?: member<any>;
  UVDisplaceMagnitude?: member<number>;
  UVDisplaceBias?: member<number>;
  UVDisplaceMapScale?: member<[number, number]>;
  UVDisplaceMapOffset?: member<[number, number]>;
  WorldspaceVertexOffsetMap?: member<any>;
  WorldspaceOffsetMagnitude?: member<[number, number]>;
  WorldspaceVertexOffsetMapScale?: member<[number, number]>;
  WorldspaceVertexOffsetMapOffset?: member<[number, number]>;
  WorldspaceOffsetPerVertex?: member<boolean>;
  Culling?: member<any>;
  AlphaHandling?: member<any>;
  AlphaClip?: member<number>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  Metallic?: member<number>;
  Smoothness?: member<number>;
  MetallicMap?: member<any>;
  _regular?: member<any>;
  _transparent?: member<any>;
}

const PBS_DisplaceMetallic: FC<PBS_DisplaceMetallicInput> = (
  props: PBS_DisplaceMetallicInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    TextureScale,
    TextureOffset,
    AlbedoColor,
    AlbedoTexture,
    EmissiveColor,
    EmissiveMap,
    NormalMap,
    NormalScale,
    OcclusionMap,
    VertexDisplaceMap,
    VertexDisplaceMagnitude,
    VertexDisplaceBias,
    VertexDisplaceMapScale,
    VertexDisplaceMapOffset,
    UVDisplaceMap,
    UVDisplaceMagnitude,
    UVDisplaceBias,
    UVDisplaceMapScale,
    UVDisplaceMapOffset,
    WorldspaceVertexOffsetMap,
    WorldspaceOffsetMagnitude,
    WorldspaceVertexOffsetMapScale,
    WorldspaceVertexOffsetMapOffset,
    WorldspaceOffsetPerVertex,
    Culling,
    AlphaHandling,
    AlphaClip,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    Metallic,
    Smoothness,
    MetallicMap,
    _regular,
    _transparent,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_DisplaceMetallic"
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
        name="VertexDisplaceMap"
        content={VertexDisplaceMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="VertexDisplaceMagnitude"
        content={VertexDisplaceMagnitude} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="VertexDisplaceBias"
        content={VertexDisplaceBias} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="VertexDisplaceMapScale"
        content={VertexDisplaceMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="VertexDisplaceMapOffset"
        content={VertexDisplaceMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="UVDisplaceMap"
        content={UVDisplaceMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="UVDisplaceMagnitude"
        content={UVDisplaceMagnitude} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="UVDisplaceBias"
        content={UVDisplaceBias} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="UVDisplaceMapScale"
        content={UVDisplaceMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="UVDisplaceMapOffset"
        content={UVDisplaceMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="WorldspaceVertexOffsetMap"
        content={WorldspaceVertexOffsetMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="WorldspaceOffsetMagnitude"
        content={WorldspaceOffsetMagnitude} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="WorldspaceVertexOffsetMapScale"
        content={WorldspaceVertexOffsetMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="WorldspaceVertexOffsetMapOffset"
        content={WorldspaceVertexOffsetMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WorldspaceOffsetPerVertex"
        content={WorldspaceOffsetPerVertex} /* default: False */
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
    </component>
  );
};

export default PBS_DisplaceMetallic;
