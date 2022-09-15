import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VolumeUnlitMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Mode?: member<any>;
  BlendMode?: member<any>;
  RenderQueue?: member<number>;
  Volume?: member<any>;
  StepSize?: member<number>;
  Gain?: member<number>;
  Exp?: member<number>;
  AccumulationCutoff?: member<number>;
  HitThreshold?: member<number>;
  InputRange?: member<number>;
  InputOffset?: member<number>;
  UseAlphaChannel?: member<boolean>;
  Slices?: member<any>;
  Highlights?: member<any>;
}

const VolumeUnlitMaterial: FC<VolumeUnlitMaterialInput> = (
  props: VolumeUnlitMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    Mode,
    BlendMode,
    RenderQueue,
    Volume,
    StepSize,
    Gain,
    Exp,
    AccumulationCutoff,
    HitThreshold,
    InputRange,
    InputOffset,
    UseAlphaChannel,
    Slices,
    Highlights,
  } = props;

  return (
    <component
      name="FrooxEngine.VolumeUnlitMaterial"
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.VolumeUnlitMaterial+DisplayMode]`}
        name="Mode"
        content={Mode} /* default: Additive */
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
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture3D]`}
        name="Volume"
        content={Volume} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="StepSize"
        content={StepSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Gain"
        content={Gain} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Exp"
        content={Exp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AccumulationCutoff"
        content={AccumulationCutoff} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HitThreshold"
        content={HitThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="InputRange"
        content={InputRange} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="InputOffset"
        content={InputOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseAlphaChannel"
        content={UseAlphaChannel} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.VolumeUnlitMaterial+SlicePlane]`}
        name="Slices"
        content={
          Slices
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.VolumeUnlitMaterial+SlicePlane] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.VolumeUnlitMaterial+Highlight]`}
        name="Highlights"
        content={
          Highlights
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.VolumeUnlitMaterial+Highlight] */
      />
    </component>
  );
};

export default VolumeUnlitMaterial;
