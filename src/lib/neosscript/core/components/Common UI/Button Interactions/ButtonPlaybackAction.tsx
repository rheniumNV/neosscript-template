import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonPlaybackActionInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Playback?: member<any>;
  OnHover?: member<any>;
  OnLeave?: member<any>;
  OnPress?: member<any>;
  OnRelease?: member<any>;
}

const ButtonPlaybackAction: FC<ButtonPlaybackActionInput> = (
  props: ButtonPlaybackActionInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Playback,
    OnHover,
    OnLeave,
    OnPress,
    OnRelease,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonPlaybackAction"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`}
        name="Playback"
        content={Playback} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`}
        name="OnHover"
        content={OnHover} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`}
        name="OnLeave"
        content={OnLeave} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`}
        name="OnPress"
        content={OnPress} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`}
        name="OnRelease"
        content={OnRelease} /* default: None */
      />
    </component>
  );
};

export default ButtonPlaybackAction;
