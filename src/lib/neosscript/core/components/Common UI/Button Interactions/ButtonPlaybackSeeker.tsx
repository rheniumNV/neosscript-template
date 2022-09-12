import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonPlaybackSeekerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Playback?: member<any>;
  Vertical?: member<boolean>;
  Continous?: member<boolean>;
}

const ButtonPlaybackSeeker: FC<ButtonPlaybackSeekerInput> = (
  props: ButtonPlaybackSeekerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Playback,
    Vertical,
    Continous,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonPlaybackSeeker"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Vertical"
        content={Vertical} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Continous"
        content={Continous} /* default: False */
      />
    </component>
  );
};

export default ButtonPlaybackSeeker;
