import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonHoverRelayInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  OnHoverEnter?: member<any>;
  OnHoverStay?: member<any>;
  OnHoverLeave?: member<any>;
}

const ButtonHoverRelay: FC<ButtonHoverRelayInput> = (
  props: ButtonHoverRelayInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    OnHoverEnter,
    OnHoverStay,
    OnHoverLeave,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonHoverRelay"
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
        type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`}
        name="OnHoverEnter"
        content={OnHoverEnter} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`}
        name="OnHoverStay"
        content={OnHoverStay} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`}
        name="OnHoverLeave"
        content={OnHoverLeave} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default ButtonHoverRelay;
