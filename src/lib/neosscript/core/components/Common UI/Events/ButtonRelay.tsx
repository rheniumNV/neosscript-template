import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonRelayInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DoublePressDelay?: member<number>;
  ReleasePressInterval?: member<number>;
  ButtonPressed?: member<any>;
}

const ButtonRelay: FC<ButtonRelayInput> = (props: ButtonRelayInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DoublePressDelay,
    ReleasePressInterval,
    ButtonPressed,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ButtonRelay"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DoublePressDelay"
        content={DoublePressDelay} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ReleasePressInterval"
        content={ReleasePressInterval} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`}
        name="ButtonPressed"
        content={ButtonPressed} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default ButtonRelay;
