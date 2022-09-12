import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_SliceSpecularInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  AlbedoColor?: member<[number, number, number, number]>;
  EdgeColor?: member<[number, number, number, number]>;
  AlbedoTexture?: member<any>;
  EmissiveColor?: member<[number, number, number, number]>;
  EdgeEmissiveColor?: member<[number, number, number, number]>;
  EmissiveMap?: member<any>;
  NormalMap?: member<any>;
  NormalScale?: member<number>;
  OcclusionMap?: member<any>;
  DetailTextureScale?: member<[number, number]>;
  DetailTextureOffset?: member<[number, number]>;
  DetailAlbedoTexture?: member<any>;
  DetailNormalMap?: member<any>;
  DetailNormalScale?: member<number>;
  Culling?: member<any>;
  HideSlicers?: member<boolean>;
  Slicers?: member<any>;
  LocalSpace?: member<boolean>;
  EdgeTransitionStart?: member<number>;
  EdgeTransitionEnd?: member<number>;
  AlphaHandling?: member<any>;
  _useAlphaClip?: member<boolean>;
  AlphaClip?: member<number>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  SpecularColor?: member<[number, number, number, number]>;
  SpecularMap?: member<any>;
  _regular?: member<any>;
  _transparent?: member<any>;
}

const PBS_SliceSpecular: FC<PBS_SliceSpecularInput> = (
  props: PBS_SliceSpecularInput
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
    EdgeColor,
    AlbedoTexture,
    EmissiveColor,
    EdgeEmissiveColor,
    EmissiveMap,
    NormalMap,
    NormalScale,
    OcclusionMap,
    DetailTextureScale,
    DetailTextureOffset,
    DetailAlbedoTexture,
    DetailNormalMap,
    DetailNormalScale,
    Culling,
    HideSlicers,
    Slicers,
    LocalSpace,
    EdgeTransitionStart,
    EdgeTransitionEnd,
    AlphaHandling,
    _useAlphaClip,
    AlphaClip,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    SpecularColor,
    SpecularMap,
    _regular,
    _transparent,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_SliceSpecular"
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EdgeColor"
        content={EdgeColor} /* default: [0; 0; 0; 0] */
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EdgeEmissiveColor"
        content={EdgeEmissiveColor} /* default: [0; 0; 0; 0] */
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
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="DetailTextureScale"
        content={DetailTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="DetailTextureOffset"
        content={DetailTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="DetailAlbedoTexture"
        content={DetailAlbedoTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="DetailNormalMap"
        content={DetailNormalMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DetailNormalScale"
        content={DetailNormalScale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`}
        name="Culling"
        content={Culling} /* default: Off */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HideSlicers"
        content={HideSlicers} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.PBS_Slice+Slicer]`}
        name="Slicers"
        content={
          Slicers
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.PBS_Slice+Slicer] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="LocalSpace"
        content={LocalSpace} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EdgeTransitionStart"
        content={EdgeTransitionStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EdgeTransitionEnd"
        content={EdgeTransitionEnd} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AlphaHandling]`}
        name="AlphaHandling"
        content={AlphaHandling} /* default: Opaque */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="_useAlphaClip"
        content={_useAlphaClip} /* default: False */
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

export default PBS_SliceSpecular;
