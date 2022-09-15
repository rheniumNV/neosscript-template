import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FresnelLerpMaterialInput {
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
  LerpTexturePolarUV?: member<boolean>;
  LerpTexturePolarPower?: member<number>;
  Exponent0?: member<number>;
  Exponent1?: member<number>;
  FarColor0?: member<[number, number, number, number]>;
  NearColor0?: member<[number, number, number, number]>;
  FarColor1?: member<[number, number, number, number]>;
  NearColor1?: member<[number, number, number, number]>;
  FarTexture0?: member<any>;
  NearTexture0?: member<any>;
  FarTexture1?: member<any>;
  NearTexture1?: member<any>;
  NormalMap0?: member<any>;
  NormalMap1?: member<any>;
  BlendMode?: member<any>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
}

const FresnelLerpMaterial: FC<FresnelLerpMaterialInput> = (
  props: FresnelLerpMaterialInput
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
    LerpTexturePolarUV,
    LerpTexturePolarPower,
    Exponent0,
    Exponent1,
    FarColor0,
    NearColor0,
    FarColor1,
    NearColor1,
    FarTexture0,
    NearTexture0,
    FarTexture1,
    NearTexture1,
    NormalMap0,
    NormalMap1,
    BlendMode,
    Sidedness,
    ZWrite,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.FresnelLerpMaterial"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="LerpTexturePolarUV"
        content={LerpTexturePolarUV} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LerpTexturePolarPower"
        content={LerpTexturePolarPower} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Exponent0"
        content={Exponent0} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Exponent1"
        content={Exponent1} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FarColor0"
        content={FarColor0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NearColor0"
        content={NearColor0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FarColor1"
        content={FarColor1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NearColor1"
        content={NearColor1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="FarTexture0"
        content={FarTexture0} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NearTexture0"
        content={NearTexture0} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="FarTexture1"
        content={FarTexture1} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NearTexture1"
        content={NearTexture1} /* default: ID0 */
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

export default FresnelLerpMaterial;
