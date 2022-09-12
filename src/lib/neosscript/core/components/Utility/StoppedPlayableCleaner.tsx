import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StoppedPlayableCleanerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Playable?: member<any>;
  GracePeriod?: member<number>;
  CheckingUser?: member<any>;
}

const StoppedPlayableCleaner: FC<StoppedPlayableCleanerInput> = (
  props: StoppedPlayableCleanerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Playable,
    GracePeriod,
    CheckingUser,
  } = props;

  return (
    <component
      name="FrooxEngine.StoppedPlayableCleaner"
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
        name="Playable"
        content={Playable} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="GracePeriod"
        content={GracePeriod} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`}
        name="CheckingUser"
        content={CheckingUser} /* default: ID0 */
      />
    </component>
  );
};

export default StoppedPlayableCleaner;
