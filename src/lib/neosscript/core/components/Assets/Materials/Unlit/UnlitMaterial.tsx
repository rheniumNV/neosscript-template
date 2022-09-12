import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UnlitMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  TintColor?: member<[number, number, number, number]>;
  Texture?: member<any>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  MaskTexture?: member<any>;
  MaskScale?: member<[number, number]>;
  MaskOffset?: member<[number, number]>;
  MaskMode?: member<any>;
  BlendMode?: member<any>;
  AlphaCutoff?: member<number>;
  UseVertexColors?: member<boolean>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  OffsetTexture?: member<any>;
  OffsetMagnitude?: member<[number, number]>;
  OffsetTextureScale?: member<[number, number]>;
  OffsetTextureOffset?: member<[number, number]>;
  PolarUVmapping?: member<boolean>;
  PolarPower?: member<number>;
  StereoTextureTransform?: member<boolean>;
  RightEyeTextureScale?: member<[number, number]>;
  RightEyeTextureOffset?: member<[number, number]>;
  DecodeAsNormalMap?: member<boolean>;
  UseBillboardGeometry?: member<boolean>;
  UsePerBillboardScale?: member<boolean>;
  UsePerBillboardRotation?: member<boolean>;
  UsePerBillboardUV?: member<boolean>;
  BillboardSize?: member<[number, number]>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  _unlit?: member<any>;
  _unlitBillboard?: member<any>;
}

const UnlitMaterial: FC<UnlitMaterialInput> = (props: UnlitMaterialInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    TintColor,
    Texture,
    TextureScale,
    TextureOffset,
    MaskTexture,
    MaskScale,
    MaskOffset,
    MaskMode,
    BlendMode,
    AlphaCutoff,
    UseVertexColors,
    Sidedness,
    ZWrite,
    OffsetTexture,
    OffsetMagnitude,
    OffsetTextureScale,
    OffsetTextureOffset,
    PolarUVmapping,
    PolarPower,
    StereoTextureTransform,
    RightEyeTextureScale,
    RightEyeTextureOffset,
    DecodeAsNormalMap,
    UseBillboardGeometry,
    UsePerBillboardScale,
    UsePerBillboardRotation,
    UsePerBillboardUV,
    BillboardSize,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    _unlit,
    _unlitBillboard,
  } = props;

  return (
    <component
      name="FrooxEngine.UnlitMaterial"
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="TintColor"
        content={TintColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Texture"
        content={Texture} /* default: ID0 */
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="MaskTexture"
        content={MaskTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MaskScale"
        content={MaskScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MaskOffset"
        content={MaskOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.MaskTextureMode]`}
        name="MaskMode"
        content={MaskMode} /* default: MultiplyAlpha */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AlphaCutoff"
        content={AlphaCutoff} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseVertexColors"
        content={UseVertexColors} /* default: False */
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="OffsetTexture"
        content={OffsetTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OffsetMagnitude"
        content={OffsetMagnitude} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OffsetTextureScale"
        content={OffsetTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="OffsetTextureOffset"
        content={OffsetTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PolarUVmapping"
        content={PolarUVmapping} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PolarPower"
        content={PolarPower} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="StereoTextureTransform"
        content={StereoTextureTransform} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="RightEyeTextureScale"
        content={RightEyeTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="RightEyeTextureOffset"
        content={RightEyeTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DecodeAsNormalMap"
        content={DecodeAsNormalMap} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseBillboardGeometry"
        content={UseBillboardGeometry} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UsePerBillboardScale"
        content={UsePerBillboardScale} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UsePerBillboardRotation"
        content={UsePerBillboardRotation} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UsePerBillboardUV"
        content={UsePerBillboardUV} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="BillboardSize"
        content={BillboardSize} /* default: [0; 0] */
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_unlit"
        content={_unlit} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_unlitBillboard"
        content={_unlitBillboard} /* default: ID0 */
      />
    </component>
  );
};

export default UnlitMaterial;
