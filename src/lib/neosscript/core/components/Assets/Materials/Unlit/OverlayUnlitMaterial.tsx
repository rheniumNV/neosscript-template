import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface OverlayUnlitMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  BehindTintColor?: member<[number, number, number, number]>;
  FrontTintColor?: member<[number, number, number, number]>;
  BehindTexture?: member<any>;
  BehindTextureScale?: member<[number, number]>;
  BehindTextureOffset?: member<[number, number]>;
  FrontTexture?: member<any>;
  FrontTextureScale?: member<[number, number]>;
  FrontTextureOffset?: member<[number, number]>;
  BlendMode?: member<any>;
  AlphaCutoff?: member<number>;
  UseVertexColors?: member<boolean>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  PolarUVmapping?: member<boolean>;
  PolarPower?: member<number>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
}

const OverlayUnlitMaterial: FC<OverlayUnlitMaterialInput> = (
  props: OverlayUnlitMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    BehindTintColor,
    FrontTintColor,
    BehindTexture,
    BehindTextureScale,
    BehindTextureOffset,
    FrontTexture,
    FrontTextureScale,
    FrontTextureOffset,
    BlendMode,
    AlphaCutoff,
    UseVertexColors,
    Sidedness,
    ZWrite,
    PolarUVmapping,
    PolarPower,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.OverlayUnlitMaterial"
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="BehindTintColor"
        content={BehindTintColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FrontTintColor"
        content={FrontTintColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="BehindTexture"
        content={BehindTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="BehindTextureScale"
        content={BehindTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="BehindTextureOffset"
        content={BehindTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="FrontTexture"
        content={FrontTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FrontTextureScale"
        content={FrontTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FrontTextureOffset"
        content={FrontTextureOffset} /* default: [0; 0] */
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
    </component>
  );
};

export default OverlayUnlitMaterial;
