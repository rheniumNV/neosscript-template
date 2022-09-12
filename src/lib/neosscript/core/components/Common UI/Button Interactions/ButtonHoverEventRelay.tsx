import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonHoverEventRelayInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
}

const ButtonHoverEventRelay: FC<ButtonHoverEventRelayInput> = (
  props: ButtonHoverEventRelayInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Target } =
    props;

  return (
    <component
      name="FrooxEngine.ButtonHoverEventRelay"
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
        name="Target"
        content={Target} /* default: ID0 */
      />
    </component>
  );
};

export default ButtonHoverEventRelay;
