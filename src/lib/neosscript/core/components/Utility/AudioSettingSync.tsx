import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioSettingSyncInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DefaultAudioInputDeviceIndex?: member<number>;
  OverrideAudioOutputIndex?: member<number>;
  MasterVolume?: member<number>;
  WhisperVoiceVolume?: member<number>;
  NoiseGateThreshold?: member<number>;
  NoiseGateAttack?: member<number>;
  NoiseGateHold?: member<number>;
  NoiseGateRelease?: member<number>;
  NormalizationThreshold?: member<number>;
  DisableNormalization?: member<boolean>;
  NoiseSupression?: member<boolean>;
}

const AudioSettingSync: FC<AudioSettingSyncInput> = (
  props: AudioSettingSyncInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DefaultAudioInputDeviceIndex,
    OverrideAudioOutputIndex,
    MasterVolume,
    WhisperVoiceVolume,
    NoiseGateThreshold,
    NoiseGateAttack,
    NoiseGateHold,
    NoiseGateRelease,
    NormalizationThreshold,
    DisableNormalization,
    NoiseSupression,
  } = props;

  return (
    <component
      name="FrooxEngine.AudioSettingSync"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="DefaultAudioInputDeviceIndex"
        content={DefaultAudioInputDeviceIndex} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="OverrideAudioOutputIndex"
        content={OverrideAudioOutputIndex} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MasterVolume"
        content={MasterVolume} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="WhisperVoiceVolume"
        content={WhisperVoiceVolume} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NoiseGateThreshold"
        content={NoiseGateThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NoiseGateAttack"
        content={NoiseGateAttack} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NoiseGateHold"
        content={NoiseGateHold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NoiseGateRelease"
        content={NoiseGateRelease} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalizationThreshold"
        content={NormalizationThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DisableNormalization"
        content={DisableNormalization} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="NoiseSupression"
        content={NoiseSupression} /* default: False */
      />
    </component>
  );
};

export default AudioSettingSync;
