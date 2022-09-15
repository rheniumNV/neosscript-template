import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PBS_VoronoiCrystalInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  NoiseScale?: member<[number, number]>;
  NoiseAnimationOffset?: member<number>;
  CellColorTint?: member<[number, number, number, number]>;
  ColorGradient?: member<any>;
  EmissionColor?: member<[number, number, number, number]>;
  EmissionGradient?: member<any>;
  SmoothnessGradient?: member<any>;
  CellSmoothness?: member<number>;
  CellMetallic?: member<number>;
  NormalMap?: member<any>;
  NormalStrength?: member<number>;
  NormalTextureScale?: member<[number, number]>;
  NormalTextureOffset?: member<[number, number]>;
  EdgeThickness?: member<number>;
  EdgeColor?: member<[number, number, number, number]>;
  EdgeEmission?: member<[number, number, number, number]>;
  EdgeSmoothness?: member<number>;
  EdgeMetallic?: member<number>;
  EdgeNormalStrength?: member<number>;
}

const PBS_VoronoiCrystal: FC<PBS_VoronoiCrystalInput> = (
  props: PBS_VoronoiCrystalInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    NoiseScale,
    NoiseAnimationOffset,
    CellColorTint,
    ColorGradient,
    EmissionColor,
    EmissionGradient,
    SmoothnessGradient,
    CellSmoothness,
    CellMetallic,
    NormalMap,
    NormalStrength,
    NormalTextureScale,
    NormalTextureOffset,
    EdgeThickness,
    EdgeColor,
    EdgeEmission,
    EdgeSmoothness,
    EdgeMetallic,
    EdgeNormalStrength,
  } = props;

  return (
    <component
      name="FrooxEngine.PBS_VoronoiCrystal"
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
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NoiseScale"
        content={NoiseScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NoiseAnimationOffset"
        content={NoiseAnimationOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="CellColorTint"
        content={CellColorTint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ColorGradient"
        content={ColorGradient} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EmissionColor"
        content={EmissionColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="EmissionGradient"
        content={EmissionGradient} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="SmoothnessGradient"
        content={SmoothnessGradient} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CellSmoothness"
        content={CellSmoothness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CellMetallic"
        content={CellMetallic} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NormalMap"
        content={NormalMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalStrength"
        content={NormalStrength} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NormalTextureScale"
        content={NormalTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NormalTextureOffset"
        content={NormalTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EdgeThickness"
        content={EdgeThickness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EdgeColor"
        content={EdgeColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="EdgeEmission"
        content={EdgeEmission} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EdgeSmoothness"
        content={EdgeSmoothness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EdgeMetallic"
        content={EdgeMetallic} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="EdgeNormalStrength"
        content={EdgeNormalStrength} /* default: 0 */
      />
    </component>
  );
};

export default PBS_VoronoiCrystal;
