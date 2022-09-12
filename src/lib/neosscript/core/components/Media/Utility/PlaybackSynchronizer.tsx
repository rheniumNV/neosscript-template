import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PlaybackSynchronizerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  Source?: member<any>;
  UseNormalizedPosition?: member<boolean>;
  PositionOffset?: member<number>;
  PositionRate?: member<number>;
}

const PlaybackSynchronizer: FC<PlaybackSynchronizerInput> = (
  props: PlaybackSynchronizerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    Source,
    UseNormalizedPosition,
    PositionOffset,
    PositionRate,
  } = props;

  return (
    <component
      name="FrooxEngine.PlaybackSynchronizer"
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
        type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncPlayback]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`}
        name="Source"
        content={Source} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseNormalizedPosition"
        content={UseNormalizedPosition} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PositionOffset"
        content={PositionOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PositionRate"
        content={PositionRate} /* default: 0 */
      />
    </component>
  );
};

export default PlaybackSynchronizer;
