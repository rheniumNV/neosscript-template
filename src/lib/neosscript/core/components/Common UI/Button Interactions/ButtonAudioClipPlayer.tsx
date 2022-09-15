import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonAudioClipPlayerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ParentUnder?: member<any>;
  MinDistance?: member<any>;
  MaxDistance?: member<any>;
  RolloffMode?: member<any>;
  PressedClips?: member<any>;
  ReleasedClips?: member<any>;
  HoverEnterClips?: member<any>;
  HoverLeaveClips?: member<any>;
}

const ButtonAudioClipPlayer: FC<ButtonAudioClipPlayerInput> = (
  props: ButtonAudioClipPlayerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ParentUnder,
    MinDistance,
    MaxDistance,
    RolloffMode,
    PressedClips,
    ReleasedClips,
    HoverEnterClips,
    HoverLeaveClips,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonAudioClipPlayer"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="ParentUnder"
        content={ParentUnder} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`}
        name="MinDistance"
        content={MinDistance} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`}
        name="MaxDistance"
        content={MaxDistance} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.AudioRolloffMode]]`}
        name="RolloffMode"
        content={RolloffMode} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`}
        name="PressedClips"
        content={
          PressedClips
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`}
        name="ReleasedClips"
        content={
          ReleasedClips
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`}
        name="HoverEnterClips"
        content={
          HoverEnterClips
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`}
        name="HoverLeaveClips"
        content={
          HoverLeaveClips
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */
      />
    </component>
  );
};

export default ButtonAudioClipPlayer;
