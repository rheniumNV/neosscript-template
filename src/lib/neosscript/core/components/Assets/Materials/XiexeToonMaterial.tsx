import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface XiexeToonMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  MainTexture?: member<any>;
  Color?: member<[number, number, number, number]>;
  UseVertexColors?: member<boolean>;
  BlendMode?: member<any>;
  ZWrite?: member<any>;
  AlphaClip?: member<number>;
  MainTextureScale?: member<[number, number]>;
  MainTextureOffset?: member<[number, number]>;
  Saturation?: member<number>;
  NormalMap?: member<any>;
  NormalMapScale?: member<[number, number]>;
  NormalMapOffset?: member<[number, number]>;
  NormalScale?: member<number>;
  Metallic?: member<number>;
  Glossiness?: member<number>;
  Reflectivity?: member<number>;
  MetallicGlossMap?: member<any>;
  MetallicGlossMapScale?: member<[number, number]>;
  MetallicGlossMapOffset?: member<[number, number]>;
  EmissionMap?: member<any>;
  EmissionColor?: member<[number, number, number, number]>;
  EmissionMapScale?: member<[number, number]>;
  EmissionMapOffset?: member<[number, number]>;
  RimColor?: member<[number, number, number, number]>;
  RimAlbedoTint?: member<number>;
  RimAttenuationEffect?: member<number>;
  RimIntensity?: member<number>;
  RimRange?: member<number>;
  RimThreshold?: member<number>;
  RimSharpness?: member<number>;
  SpecularIntensity?: member<number>;
  SpecularArea?: member<number>;
  Matcap?: member<any>;
  MatcapTint?: member<[number, number, number, number]>;
  OcclusionMap?: member<any>;
  OcclusionMapScale?: member<[number, number]>;
  OcclusionMapOffset?: member<[number, number]>;
  OcclusionColor?: member<[number, number, number, number]>;
  Outline?: member<any>;
  OutlineWidth?: member<number>;
  OutlineColor?: member<[number, number, number, number]>;
  OutlineAlbedoTint?: member<boolean>;
  OutlineMask?: member<any>;
  ShadowRamp?: member<any>;
  ShadowRampMask?: member<any>;
  ShadowRampMaskScale?: member<[number, number]>;
  ShadowRampMaskOffset?: member<[number, number]>;
  ShadowRim?: member<[number, number, number, number]>;
  ShadowSharpness?: member<number>;
  ShadowRimRange?: member<number>;
  ShadowRimThreshold?: member<number>;
  ShadowRimSharpness?: member<number>;
  ShadowRimAlbedoTint?: member<number>;
  ThicknessMap?: member<any>;
  ThicknessMapScale?: member<[number, number]>;
  ThicknessMapOffset?: member<[number, number]>;
  SubsurfaceColor?: member<[number, number, number, number]>;
  SubsurfaceDistortion?: member<number>;
  SubsurfacePower?: member<number>;
  SubsurfaceScale?: member<number>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  Culling?: member<any>;
  ColorMask?: member<any>;
  AlbedoUV?: member<number>;
  NormalUV?: member<number>;
  MetallicUV?: member<number>;
  ThicknessUV?: member<number>;
  OcclusionUV?: member<number>;
  EmissionUV?: member<number>;
  RenderQueue?: member<number>;
  __legacyCutout?: member<boolean>;
  _regular?: member<any>;
  _outline?: member<any>;
}

const XiexeToonMaterial: FC<XiexeToonMaterialInput> = (
  props: XiexeToonMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    MainTexture,
    Color,
    UseVertexColors,
    BlendMode,
    ZWrite,
    AlphaClip,
    MainTextureScale,
    MainTextureOffset,
    Saturation,
    NormalMap,
    NormalMapScale,
    NormalMapOffset,
    NormalScale,
    Metallic,
    Glossiness,
    Reflectivity,
    MetallicGlossMap,
    MetallicGlossMapScale,
    MetallicGlossMapOffset,
    EmissionMap,
    EmissionColor,
    EmissionMapScale,
    EmissionMapOffset,
    RimColor,
    RimAlbedoTint,
    RimAttenuationEffect,
    RimIntensity,
    RimRange,
    RimThreshold,
    RimSharpness,
    SpecularIntensity,
    SpecularArea,
    Matcap,
    MatcapTint,
    OcclusionMap,
    OcclusionMapScale,
    OcclusionMapOffset,
    OcclusionColor,
    Outline,
    OutlineWidth,
    OutlineColor,
    OutlineAlbedoTint,
    OutlineMask,
    ShadowRamp,
    ShadowRampMask,
    ShadowRampMaskScale,
    ShadowRampMaskOffset,
    ShadowRim,
    ShadowSharpness,
    ShadowRimRange,
    ShadowRimThreshold,
    ShadowRimSharpness,
    ShadowRimAlbedoTint,
    ThicknessMap,
    ThicknessMapScale,
    ThicknessMapOffset,
    SubsurfaceColor,
    SubsurfaceDistortion,
    SubsurfacePower,
    SubsurfaceScale,
    OffsetFactor,
    OffsetUnits,
    Culling,
    ColorMask,
    AlbedoUV,
    NormalUV,
    MetallicUV,
    ThicknessUV,
    OcclusionUV,
    EmissionUV,
    RenderQueue,
    __legacyCutout,
    _regular,
    _outline,
  } = props;

  return (
    <component
      name="FrooxEngine.XiexeToonMaterial"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
      version={1}
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MainTexture"
        content={MainTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Color"
        content={Color} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseVertexColors"
        content={UseVertexColors} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`}
        name="ZWrite"
        content={ZWrite} /* default: Auto */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AlphaClip"
        content={AlphaClip} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MainTextureScale"
        content={MainTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MainTextureOffset"
        content={MainTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Saturation"
        content={Saturation} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NormalMap"
        content={NormalMap} /* default: ID0 */
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalScale"
        content={NormalScale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Metallic"
        content={Metallic} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Glossiness"
        content={Glossiness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Reflectivity"
        content={Reflectivity} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MetallicGlossMap"
        content={MetallicGlossMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MetallicGlossMapScale"
        content={MetallicGlossMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MetallicGlossMapOffset"
        content={MetallicGlossMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="EmissionMap"
        content={EmissionMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissionColor"
        content={EmissionColor} /* default: [0; 0; 0; 0] */
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="RimColor"
        content={RimColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RimAlbedoTint"
        content={RimAlbedoTint} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RimAttenuationEffect"
        content={RimAttenuationEffect} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RimIntensity"
        content={RimIntensity} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RimRange"
        content={RimRange} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RimThreshold"
        content={RimThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RimSharpness"
        content={RimSharpness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SpecularIntensity"
        content={SpecularIntensity} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SpecularArea"
        content={SpecularArea} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Matcap"
        content={Matcap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="MatcapTint"
        content={MatcapTint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OcclusionMap"
        content={OcclusionMap} /* default: ID0 */
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="OcclusionColor"
        content={OcclusionColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.XiexeToonMaterial+OutlineStyle]`}
        name="Outline"
        content={Outline} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OutlineWidth"
        content={OutlineWidth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="OutlineColor"
        content={OutlineColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OutlineAlbedoTint"
        content={OutlineAlbedoTint} /* default: False */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OutlineMask"
        content={OutlineMask} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ShadowRamp"
        content={ShadowRamp} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ShadowRampMask"
        content={ShadowRampMask} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ShadowRampMaskScale"
        content={ShadowRampMaskScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ShadowRampMaskOffset"
        content={ShadowRampMaskOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="ShadowRim"
        content={ShadowRim} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ShadowSharpness"
        content={ShadowSharpness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ShadowRimRange"
        content={ShadowRimRange} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ShadowRimThreshold"
        content={ShadowRimThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ShadowRimSharpness"
        content={ShadowRimSharpness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ShadowRimAlbedoTint"
        content={ShadowRimAlbedoTint} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ThicknessMap"
        content={ThicknessMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ThicknessMapScale"
        content={ThicknessMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ThicknessMapOffset"
        content={ThicknessMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SubsurfaceColor"
        content={SubsurfaceColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SubsurfaceDistortion"
        content={SubsurfaceDistortion} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SubsurfacePower"
        content={SubsurfacePower} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SubsurfaceScale"
        content={SubsurfaceScale} /* default: 0 */
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`}
        name="Culling"
        content={Culling} /* default: Off */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ColorMask]`}
        name="ColorMask"
        content={ColorMask} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="AlbedoUV"
        content={AlbedoUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="NormalUV"
        content={NormalUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="MetallicUV"
        content={MetallicUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="ThicknessUV"
        content={ThicknessUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="OcclusionUV"
        content={OcclusionUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="EmissionUV"
        content={EmissionUV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="__legacyCutout"
        content={__legacyCutout} /* default: False */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_regular"
        content={_regular} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_outline"
        content={_outline} /* default: ID0 */
      />
    </component>
  );
};

export default XiexeToonMaterial;
