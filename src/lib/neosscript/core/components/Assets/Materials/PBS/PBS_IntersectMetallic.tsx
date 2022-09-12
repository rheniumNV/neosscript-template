import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_IntersectMetallicInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  BeginTransitionStart?: member<number>;
  BeginTransitionEnd?: member<number>;
  EndTransitionStart?: member<number>;
  EndTransitionEnd?: member<number>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  AlbedoColor?: member<[number, number, number, number]>;
  IntersectAlbedoColor?: member<[number, number, number, number]>;
  AlbedoTexture?: member<any>;
  EmissiveColor?: member<[number, number, number, number]>;
  IntersectEmissiveColor?: member<[number, number, number, number]>;
  EmissiveMap?: member<any>;
  NormalMap?: member<any>;
  NormalScale?: member<number>;
  OcclusionMap?: member<any>;
  Culling?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  Metallic?: member<number>;
  Smoothness?: member<number>;
  MetallicMap?: member<any>;
}

const PBS_IntersectMetallic: FC<PBS_IntersectMetallicInput> = (
  props: PBS_IntersectMetallicInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    BeginTransitionStart,
    BeginTransitionEnd,
    EndTransitionStart,
    EndTransitionEnd,
    TextureScale,
    TextureOffset,
    AlbedoColor,
    IntersectAlbedoColor,
    AlbedoTexture,
    EmissiveColor,
    IntersectEmissiveColor,
    EmissiveMap,
    NormalMap,
    NormalScale,
    OcclusionMap,
    Culling,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    Metallic,
    Smoothness,
    MetallicMap,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_IntersectMetallic"
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
        name="BeginTransitionStart"
        content={BeginTransitionStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BeginTransitionEnd"
        content={BeginTransitionEnd} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EndTransitionStart"
        content={EndTransitionStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EndTransitionEnd"
        content={EndTransitionEnd} /* default: 0 */
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
        name="IntersectAlbedoColor"
        content={IntersectAlbedoColor} /* default: [0; 0; 0; 0] */
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
        name="IntersectEmissiveColor"
        content={IntersectEmissiveColor} /* default: [0; 0; 0; 0] */
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`}
        name="Culling"
        content={Culling} /* default: Off */
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
    </component>
  );
};

export default PBS_IntersectMetallic;
