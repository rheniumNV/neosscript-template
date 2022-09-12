import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface OverlayFresnelMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Exponent?: member<number>;
  BehindFarColor?: member<[number, number, number, number]>;
  BehindNearColor?: member<[number, number, number, number]>;
  FrontFarColor?: member<[number, number, number, number]>;
  FrontNearColor?: member<[number, number, number, number]>;
  BehindFarTexture?: member<any>;
  BehindNearTexture?: member<any>;
  FrontFarTexture?: member<any>;
  FrontNearTexture?: member<any>;
  BehindFarTextureScale?: member<[number, number]>;
  BehindFarTextureOffset?: member<[number, number]>;
  BehindNearTextureScale?: member<[number, number]>;
  BehindNearTextureOffset?: member<[number, number]>;
  FrontFarTextureScale?: member<[number, number]>;
  FrontFarTextureOffset?: member<[number, number]>;
  FrontNearTextureScale?: member<[number, number]>;
  FrontNearTextureOffset?: member<[number, number]>;
  NormalMap?: member<any>;
  BlendMode?: member<any>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  RenderQueue?: member<number>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  PolarUVmapping?: member<boolean>;
  PolarPower?: member<number>;
}

const OverlayFresnelMaterial: FC<OverlayFresnelMaterialInput> = (
  props: OverlayFresnelMaterialInput
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
    BehindFarColor,
    BehindNearColor,
    FrontFarColor,
    FrontNearColor,
    BehindFarTexture,
    BehindNearTexture,
    FrontFarTexture,
    FrontNearTexture,
    BehindFarTextureScale,
    BehindFarTextureOffset,
    BehindNearTextureScale,
    BehindNearTextureOffset,
    FrontFarTextureScale,
    FrontFarTextureOffset,
    FrontNearTextureScale,
    FrontNearTextureOffset,
    NormalMap,
    BlendMode,
    Sidedness,
    ZWrite,
    RenderQueue,
    OffsetFactor,
    OffsetUnits,
    PolarUVmapping,
    PolarPower,
  } = props;

  return (
    <component
      name="FrooxEngine.OverlayFresnelMaterial"
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
        name="BehindFarColor"
        content={BehindFarColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="BehindNearColor"
        content={BehindNearColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FrontFarColor"
        content={FrontFarColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FrontNearColor"
        content={FrontNearColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="BehindFarTexture"
        content={BehindFarTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="BehindNearTexture"
        content={BehindNearTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="FrontFarTexture"
        content={FrontFarTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="FrontNearTexture"
        content={FrontNearTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="BehindFarTextureScale"
        content={BehindFarTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="BehindFarTextureOffset"
        content={BehindFarTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="BehindNearTextureScale"
        content={BehindNearTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="BehindNearTextureOffset"
        content={BehindNearTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FrontFarTextureScale"
        content={FrontFarTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FrontFarTextureOffset"
        content={FrontFarTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FrontNearTextureScale"
        content={FrontNearTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FrontNearTextureOffset"
        content={FrontNearTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NormalMap"
        content={NormalMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
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

export default OverlayFresnelMaterial;
