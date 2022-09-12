import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FresnelMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Exponent?: member<number>;
  FarColor?: member<[number, number, number, number]>;
  NearColor?: member<[number, number, number, number]>;
  FarTexture?: member<any>;
  NearTexture?: member<any>;
  FarTextureScale?: member<[number, number]>;
  FarTextureOffset?: member<[number, number]>;
  NearTextureScale?: member<[number, number]>;
  NearTextureOffset?: member<[number, number]>;
  NormalMap?: member<any>;
  NormalScale?: member<number>;
  UseVertexColors?: member<boolean>;
  BlendMode?: member<any>;
  AlphaCutoff?: member<number>;
  MaskTexture?: member<any>;
  MaskScale?: member<[number, number]>;
  MaskOffset?: member<[number, number]>;
  MaskMode?: member<any>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  ZTest?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  PolarUVmapping?: member<boolean>;
  PolarPower?: member<number>;
}

const FresnelMaterial: FC<FresnelMaterialInput> = (
  props: FresnelMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    Exponent,
    FarColor,
    NearColor,
    FarTexture,
    NearTexture,
    FarTextureScale,
    FarTextureOffset,
    NearTextureScale,
    NearTextureOffset,
    NormalMap,
    NormalScale,
    UseVertexColors,
    BlendMode,
    AlphaCutoff,
    MaskTexture,
    MaskScale,
    MaskOffset,
    MaskMode,
    Sidedness,
    ZWrite,
    ZTest,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    PolarUVmapping,
    PolarPower,
  } = props;

  return (
    <component
      name="FrooxEngine.FresnelMaterial"
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
        name="Exponent"
        content={Exponent} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FarColor"
        content={FarColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NearColor"
        content={NearColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="FarTexture"
        content={FarTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NearTexture"
        content={NearTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FarTextureScale"
        content={FarTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FarTextureOffset"
        content={FarTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NearTextureScale"
        content={NearTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NearTextureOffset"
        content={NearTextureOffset} /* default: [0; 0] */
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AlphaCutoff"
        content={AlphaCutoff} /* default: 0 */
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PolarUVmapping"
        content={PolarUVmapping} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PolarPower"
        content={PolarPower} /* default: 0 */
      />
    </component>
  );
};

export default FresnelMaterial;
