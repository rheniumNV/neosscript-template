import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface HoverPlaybackInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  Trigger?: member<any>;
  FromBeginning?: member<boolean>;
  Loop?: member<boolean>;
}

const HoverPlayback: FC<HoverPlaybackInput> = (props: HoverPlaybackInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    Trigger,
    FromBeginning,
    Loop,
  } = props;

  return (
    <component
      name="FrooxEngine.HoverPlayback"
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
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.HoverPlayback+PlayTrigger]`}
        name="Trigger"
        content={Trigger} /* default: Hover */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="FromBeginning"
        content={FromBeginning} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Loop"
        content={Loop} /* default: False */
      />
    </component>
  );
};

export default HoverPlayback;
