import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface IsPlayingDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Playback?: member<any>;
  Targets?: member<any>;
}

const IsPlayingDriver: FC<IsPlayingDriverInput> = (
  props: IsPlayingDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Playback,
    Targets,
  } = props;

  return (
    <component
      name="FrooxEngine.IsPlayingDriver"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncPlayback]`}
        name="Playback"
        content={Playback} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Boolean]]`}
        name="Targets"
        content={
          Targets
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Boolean]] */
      />
    </component>
  );
};

export default IsPlayingDriver;
