import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonActionTriggerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  OnPressed?: member<any>;
  OnPressing?: member<any>;
  OnReleased?: member<any>;
}

const ButtonActionTrigger: FC<ButtonActionTriggerInput> = (
  props: ButtonActionTriggerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    OnPressed,
    OnPressing,
    OnReleased,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonActionTrigger"
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
        type={`FrooxEngine.SyncDelegate\`1[System.Action]`}
        name="OnPressed"
        content={OnPressed} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Action]`}
        name="OnPressing"
        content={OnPressing} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Action]`}
        name="OnReleased"
        content={OnReleased} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default ButtonActionTrigger;
