import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UnlitDistanceLerpMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  LocalSpace?: member<boolean>;
  Point?: member<[number, number, number]>;
  Distance?: member<number>;
  TransitionRange?: member<number>;
  NearTexture?: member<any>;
  FarTexture?: member<any>;
  NearTextureScale?: member<[number, number]>;
  NearTextureOffset?: member<[number, number]>;
  FarTextureScale?: member<[number, number]>;
  FarTextureOffset?: member<[number, number]>;
  NearColor?: member<[number, number, number, number]>;
  FarColor?: member<[number, number, number, number]>;
  UseVertexColors?: member<boolean>;
  BlendMode?: member<any>;
  AlphaCutoff?: member<number>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
}

const UnlitDistanceLerpMaterial: FC<UnlitDistanceLerpMaterialInput> = (
  props: UnlitDistanceLerpMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    LocalSpace,
    Point,
    Distance,
    TransitionRange,
    NearTexture,
    FarTexture,
    NearTextureScale,
    NearTextureOffset,
    FarTextureScale,
    FarTextureOffset,
    NearColor,
    FarColor,
    UseVertexColors,
    BlendMode,
    AlphaCutoff,
    Sidedness,
    ZWrite,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.UnlitDistanceLerpMaterial"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="LocalSpace"
        content={LocalSpace} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Point"
        content={Point} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Distance"
        content={Distance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TransitionRange"
        content={TransitionRange} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NearTexture"
        content={NearTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="FarTexture"
        content={FarTexture} /* default: ID0 */
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NearColor"
        content={NearColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FarColor"
        content={FarColor} /* default: [0; 0; 0; 0] */
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

export default UnlitDistanceLerpMaterial;
