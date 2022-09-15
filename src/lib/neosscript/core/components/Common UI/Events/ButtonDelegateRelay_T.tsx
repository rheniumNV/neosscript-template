import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonDelegateRelay_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DoublePressDelay?: member<number>;
  ReleasePressInterval?: member<number>;
  Argument?: member<any>;
  ButtonPressed?: member<any>;
}

const ButtonDelegateRelay_T: FC<ButtonDelegateRelay_TInput> = (
  props: ButtonDelegateRelay_TInput
) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DoublePressDelay,
    ReleasePressInterval,
    Argument,
    ButtonPressed,
  } = props;

  return (
    <component
      name={`FrooxEngine.UIX.ButtonDelegateRelay\`1[${[T]}]`}
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
        type={`FrooxEngine.SyncDelegate\`1[${T}]`}
        name="Argument"
        content={Argument} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler\`1[${T}]]`}
        name="ButtonPressed"
        content={ButtonPressed} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default ButtonDelegateRelay_T;
