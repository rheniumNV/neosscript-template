import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_DistanceLerpMetallicInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  TextureScale?: member<[number, number]>;
  TextureOffset?: member<[number, number]>;
  AlbedoColor?: member<[number, number, number, number]>;
  AlbedoTexture?: member<any>;
  EmissiveColor?: member<[number, number, number, number]>;
  EmissiveMap?: member<any>;
  NormalMap?: member<any>;
  NormalScale?: member<number>;
  OcclusionMap?: member<any>;
  GridSize?: member<[number, number, number]>;
  GridOffset?: member<[number, number, number]>;
  DisplaceFrom?: member<number>;
  DisplaceTo?: member<number>;
  DisplaceMagnitudeFrom?: member<number>;
  DisplaceMagnitudeTo?: member<number>;
  EmissionFrom?: member<number>;
  EmissionTo?: member<number>;
  EmissionColorFrom?: member<[number, number, number, number]>;
  EmissionColorTo?: member<[number, number, number, number]>;
  OverrideDisplacementDirection?: member<any>;
  LocalSpace?: member<boolean>;
  Points?: member<any>;
  Culling?: member<any>;
  Transparent?: member<boolean>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  Metallic?: member<number>;
  Smoothness?: member<number>;
  MetallicMap?: member<any>;
  _regular?: member<any>;
  _transparent?: member<any>;
}

const PBS_DistanceLerpMetallic: FC<PBS_DistanceLerpMetallicInput> = (
  props: PBS_DistanceLerpMetallicInput
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
    AlbedoTexture,
    EmissiveColor,
    EmissiveMap,
    NormalMap,
    NormalScale,
    OcclusionMap,
    GridSize,
    GridOffset,
    DisplaceFrom,
    DisplaceTo,
    DisplaceMagnitudeFrom,
    DisplaceMagnitudeTo,
    EmissionFrom,
    EmissionTo,
    EmissionColorFrom,
    EmissionColorTo,
    OverrideDisplacementDirection,
    LocalSpace,
    Points,
    Culling,
    Transparent,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    Metallic,
    Smoothness,
    MetallicMap,
    _regular,
    _transparent,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_DistanceLerpMetallic"
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
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="GridSize"
        content={GridSize} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="GridOffset"
        content={GridOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DisplaceFrom"
        content={DisplaceFrom} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DisplaceTo"
        content={DisplaceTo} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DisplaceMagnitudeFrom"
        content={DisplaceMagnitudeFrom} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DisplaceMagnitudeTo"
        content={DisplaceMagnitudeTo} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EmissionFrom"
        content={EmissionFrom} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EmissionTo"
        content={EmissionTo} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissionColorFrom"
        content={EmissionColorFrom} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissionColorTo"
        content={EmissionColorTo} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`}
        name="OverrideDisplacementDirection"
        content={OverrideDisplacementDirection} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="LocalSpace"
        content={LocalSpace} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.PBS_DistanceLerpMaterial+Point]`}
        name="Points"
        content={
          Points
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.PBS_DistanceLerpMaterial+Point] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`}
        name="Culling"
        content={Culling} /* default: Off */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Transparent"
        content={Transparent} /* default: False */
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

export default PBS_DistanceLerpMetallic;
