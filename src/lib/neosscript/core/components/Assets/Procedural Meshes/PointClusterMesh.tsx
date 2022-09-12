import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PointClusterMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Distribution?: member<any>;
  Colors?: member<any>;
  TextureColorSource?: member<any>;
  HeightScaleSource?: member<any>;
  TextureIntensityClip?: member<number>;
  TextureAlphaClip?: member<number>;
  MaxClipAttempts?: member<number>;
  HeightmapExp?: member<number>;
  Seed?: member<number>;
  Points?: member<number>;
  Atlas?: member<any>;
  Scale?: member<[number, number, number]>;
  RangeExp?: member<number>;
  JitterRange?: member<[number, number, number]>;
  Color0?: member<[number, number, number, number]>;
  Color1?: member<[number, number, number, number]>;
  ColorLerpScale?: member<number>;
  ColorGap?: member<number>;
  SimplexNoiseScale?: member<[number, number, number]>;
  SimplexNoiseOffset?: member<[number, number, number]>;
  UniformSize?: member<boolean>;
  MinSize?: member<[number, number]>;
  MaxSize?: member<[number, number]>;
  MinRotation?: member<number>;
  MaxRotation?: member<number>;
}

const PointClusterMesh: FC<PointClusterMeshInput> = (
  props: PointClusterMeshInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Distribution,
    Colors,
    TextureColorSource,
    HeightScaleSource,
    TextureIntensityClip,
    TextureAlphaClip,
    MaxClipAttempts,
    HeightmapExp,
    Seed,
    Points,
    Atlas,
    Scale,
    RangeExp,
    JitterRange,
    Color0,
    Color1,
    ColorLerpScale,
    ColorGap,
    SimplexNoiseScale,
    SimplexNoiseOffset,
    UniformSize,
    MinSize,
    MaxSize,
    MinRotation,
    MaxRotation,
  } = props;

  return (
    <component
      name="FrooxEngine.PointClusterMesh"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OverrideBoundingBox"
        content={OverrideBoundingBox} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`}
        name="OverridenBoundingBox"
        content={
          OverridenBoundingBox
        } /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PointClusterMesh+DistributionType]`}
        name="Distribution"
        content={Distribution} /* default: Cube */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PointClusterMesh+ColorMode]`}
        name="Colors"
        content={Colors} /* default: SolidColor */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture]`}
        name="TextureColorSource"
        content={TextureColorSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`}
        name="HeightScaleSource"
        content={HeightScaleSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TextureIntensityClip"
        content={TextureIntensityClip} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TextureAlphaClip"
        content={TextureAlphaClip} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="MaxClipAttempts"
        content={MaxClipAttempts} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeightmapExp"
        content={HeightmapExp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Seed"
        content={Seed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Points"
        content={Points} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.AtlasInfo]`}
        name="Atlas"
        content={Atlas} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Scale"
        content={Scale} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RangeExp"
        content={RangeExp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="JitterRange"
        content={JitterRange} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Color0"
        content={Color0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Color1"
        content={Color1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ColorLerpScale"
        content={ColorLerpScale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ColorGap"
        content={ColorGap} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="SimplexNoiseScale"
        content={SimplexNoiseScale} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="SimplexNoiseOffset"
        content={SimplexNoiseOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UniformSize"
        content={UniformSize} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MinSize"
        content={MinSize} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MaxSize"
        content={MaxSize} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinRotation"
        content={MinRotation} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxRotation"
        content={MaxRotation} /* default: 0 */
      />
    </component>
  );
};

export default PointClusterMesh;
