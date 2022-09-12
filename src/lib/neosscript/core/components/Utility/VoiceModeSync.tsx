import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VoiceModeSyncInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  FocusedWorldVoiceMode?: member<any>;
  GlobalMute?: member<boolean>;
  FocusedWorldMaxAllowedVoiceMode?: member<any>;
  BroadcastAllowed?: member<any>;
  ShoutAllowed?: member<any>;
  NormalAllowed?: member<any>;
  WhisperAllowed?: member<any>;
}

const VoiceModeSync: FC<VoiceModeSyncInput> = (props: VoiceModeSyncInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    FocusedWorldVoiceMode,
    GlobalMute,
    FocusedWorldMaxAllowedVoiceMode,
    BroadcastAllowed,
    ShoutAllowed,
    NormalAllowed,
    WhisperAllowed,
  } = props;

  return (
    <component
      name="FrooxEngine.VoiceModeSync"
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.VoiceMode]`}
        name="FocusedWorldVoiceMode"
        content={FocusedWorldVoiceMode} /* default: Mute */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="GlobalMute"
        content={GlobalMute} /* default: False */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[FrooxEngine.VoiceMode]`}
        name="FocusedWorldMaxAllowedVoiceMode"
        content={
          FocusedWorldMaxAllowedVoiceMode
        } /* default: FrooxEngine.RawOutput`1[FrooxEngine.VoiceMode] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="BroadcastAllowed"
        content={
          BroadcastAllowed
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="ShoutAllowed"
        content={
          ShoutAllowed
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="NormalAllowed"
        content={
          NormalAllowed
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="WhisperAllowed"
        content={
          WhisperAllowed
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
    </component>
  );
};

export default VoiceModeSync;
