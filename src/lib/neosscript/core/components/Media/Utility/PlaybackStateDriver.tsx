import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PlaybackStateDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  IsPlaying?: member<any>;
  IsNotPlaying?: member<any>;
  IsPaused?: member<any>;
  IsStopped?: member<any>;
}

const PlaybackStateDriver: FC<PlaybackStateDriverInput> = (
  props: PlaybackStateDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Source,
    IsPlaying,
    IsNotPlaying,
    IsPaused,
    IsStopped,
  } = props;

  return (
    <component
      name="FrooxEngine.PlaybackStateDriver"
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
        name="Source"
        content={Source} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="IsPlaying"
        content={IsPlaying} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="IsNotPlaying"
        content={IsNotPlaying} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="IsPaused"
        content={IsPaused} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="IsStopped"
        content={IsStopped} /* default: ID0 */
      />
    </component>
  );
};

export default PlaybackStateDriver;
