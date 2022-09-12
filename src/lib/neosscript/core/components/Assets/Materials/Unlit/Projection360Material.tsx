import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Projection360MaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Texture?: member<any>;
  SecondaryTexture?: member<any>;
  Cubemap?: member<any>;
  SecondaryCubemap?: member<any>;
  CubemapLOD?: member<any>;
  TextureLerp?: member<number>;
  Projection?: member<any>;
  FieldOfView?: member<[number, number]>;
  AngleOffset?: member<[number, number]>;
  PerspectiveFieldOfView?: member<[number, number]>;
  PerspectiveAngleOffset?: member<[number, number]>;
  Tint?: member<[number, number, number, number]>;
  Exposure?: member<number>;
  Gamma?: member<number>;
  TintTexture?: member<any>;
  TintTextureScale?: member<[number, number]>;
  TintTextureOffset?: member<[number, number]>;
  TintTextureMode?: member<any>;
  Tint0?: member<[number, number, number, number]>;
  Tint1?: member<[number, number, number, number]>;
  OutsideMode?: member<any>;
  OutsideColor?: member<[number, number, number, number]>;
  TextureOffset?: member<[number, number]>;
  TextureScale?: member<[number, number]>;
  StereoTextureTransform?: member<boolean>;
  RightEyeTextureOffset?: member<[number, number]>;
  RightEyeTextureScale?: member<[number, number]>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  ZTest?: member<any>;
  BlendMode?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  MaxIntensity?: member<any>;
  Rect?: member<any>;
  RectClip?: member<boolean>;
  ColorMask?: member<any>;
  OffsetTexture?: member<any>;
  OffsetMask?: member<any>;
  OffsetTextureOffset?: member<[number, number]>;
  OffsetTextureScale?: member<[number, number]>;
  OffsetMagnitude?: member<[number, number]>;
  StencilComparison?: member<any>;
  StencilOperation?: member<any>;
  StencilID?: member<any>;
  StencilWriteMask?: member<any>;
  StencilReadMask?: member<any>;
  RenderQueue?: member<number>;
}

const Projection360Material: FC<Projection360MaterialInput> = (
  props: Projection360MaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    Texture,
    SecondaryTexture,
    Cubemap,
    SecondaryCubemap,
    CubemapLOD,
    TextureLerp,
    Projection,
    FieldOfView,
    AngleOffset,
    PerspectiveFieldOfView,
    PerspectiveAngleOffset,
    Tint,
    Exposure,
    Gamma,
    TintTexture,
    TintTextureScale,
    TintTextureOffset,
    TintTextureMode,
    Tint0,
    Tint1,
    OutsideMode,
    OutsideColor,
    TextureOffset,
    TextureScale,
    StereoTextureTransform,
    RightEyeTextureOffset,
    RightEyeTextureScale,
    Sidedness,
    ZWrite,
    ZTest,
    BlendMode,
    OffsetFactor,
    OffsetUnits,
    MaxIntensity,
    Rect,
    RectClip,
    ColorMask,
    OffsetTexture,
    OffsetMask,
    OffsetTextureOffset,
    OffsetTextureScale,
    OffsetMagnitude,
    StencilComparison,
    StencilOperation,
    StencilID,
    StencilWriteMask,
    StencilReadMask,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.Projection360Material"
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
        name="Texture"
        content={Texture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="SecondaryTexture"
        content={SecondaryTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Cubemap]`}
        name="Cubemap"
        content={Cubemap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Cubemap]`}
        name="SecondaryCubemap"
        content={SecondaryCubemap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`}
        name="CubemapLOD"
        content={CubemapLOD} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TextureLerp"
        content={TextureLerp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Projection360Material+Mode]`}
        name="Projection"
        content={Projection} /* default: View */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FieldOfView"
        content={FieldOfView} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="AngleOffset"
        content={AngleOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="PerspectiveFieldOfView"
        content={PerspectiveFieldOfView} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="PerspectiveAngleOffset"
        content={PerspectiveAngleOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Tint"
        content={Tint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Exposure"
        content={Exposure} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Gamma"
        content={Gamma} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="TintTexture"
        content={TintTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TintTextureScale"
        content={TintTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TintTextureOffset"
        content={TintTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Projection360Material+TintMode]`}
        name="TintTextureMode"
        content={TintTextureMode} /* default: Direct */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Tint0"
        content={Tint0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Tint1"
        content={Tint1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Projection360Material+Outside]`}
        name="OutsideMode"
        content={OutsideMode} /* default: Clip */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="OutsideColor"
        content={OutsideColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TextureOffset"
        content={TextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="TextureScale"
        content={TextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="StereoTextureTransform"
        content={StereoTextureTransform} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="RightEyeTextureOffset"
        content={RightEyeTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="RightEyeTextureScale"
        content={RightEyeTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`}
        name="Sidedness"
        content={Sidedness} /* default: Auto */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`}
        name="ZWrite"
        content={ZWrite} /* default: Auto */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`}
        name="ZTest"
        content={ZTest} /* default: Less */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
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
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`}
        name="MaxIntensity"
        content={MaxIntensity} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.Rect]`}
        name="Rect"
        content={Rect} /* default: [X=0; Y=0; W=0; H=0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="RectClip"
        content={RectClip} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ColorMask]`}
        name="ColorMask"
        content={ColorMask} /* default: None */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OffsetTexture"
        content={OffsetTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OffsetMask"
        content={OffsetMask} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OffsetTextureOffset"
        content={OffsetTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OffsetTextureScale"
        content={OffsetTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OffsetMagnitude"
        content={OffsetMagnitude} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.StencilComparison]`}
        name="StencilComparison"
        content={StencilComparison} /* default: Disabled */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.StencilOperation]`}
        name="StencilOperation"
        content={StencilOperation} /* default: Keep */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Byte]`}
        name="StencilID"
        content={StencilID} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Byte]`}
        name="StencilWriteMask"
        content={StencilWriteMask} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Byte]`}
        name="StencilReadMask"
        content={StencilReadMask} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
    </component>
  );
};

export default Projection360Material;
