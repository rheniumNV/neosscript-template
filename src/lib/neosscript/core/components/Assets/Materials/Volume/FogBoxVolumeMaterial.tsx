import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FogBoxVolumeMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  BaseColor?: member<[number, number, number, number]>;
  AccumulationColor?: member<[number, number, number, number]>;
  AccumulationColorBottom?: member<[number, number, number, number]>;
  AccumulationColorTop?: member<[number, number, number, number]>;
  FogStart?: member<number>;
  FogEnd?: member<number>;
  FogDensity?: member<number>;
  WorldSpace?: member<boolean>;
  ColorMode?: member<any>;
  SaturationMode?: member<any>;
  AccumulationMode?: member<any>;
  AccumulationRate?: member<number>;
  BlendMode?: member<any>;
  RenderQueue?: member<number>;
}

const FogBoxVolumeMaterial: FC<FogBoxVolumeMaterialInput> = (
  props: FogBoxVolumeMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    BaseColor,
    AccumulationColor,
    AccumulationColorBottom,
    AccumulationColorTop,
    FogStart,
    FogEnd,
    FogDensity,
    WorldSpace,
    ColorMode,
    SaturationMode,
    AccumulationMode,
    AccumulationRate,
    BlendMode,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.FogBoxVolumeMaterial"
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
        name="BaseColor"
        content={BaseColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AccumulationColor"
        content={AccumulationColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AccumulationColorBottom"
        content={AccumulationColorBottom} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="AccumulationColorTop"
        content={AccumulationColorTop} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FogStart"
        content={FogStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FogEnd"
        content={FogEnd} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FogDensity"
        content={FogDensity} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WorldSpace"
        content={WorldSpace} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.FogBoxVolumeMaterial+Color]`}
        name="ColorMode"
        content={ColorMode} /* default: Constant */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.FogBoxVolumeMaterial+Saturation]`}
        name="SaturationMode"
        content={SaturationMode} /* default: Unrestricted */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.FogBoxVolumeMaterial+Accumulation]`}
        name="AccumulationMode"
        content={AccumulationMode} /* default: Linear */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AccumulationRate"
        content={AccumulationRate} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
    </component>
  );
};

export default FogBoxVolumeMaterial;
