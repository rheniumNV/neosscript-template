import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonRelay_TInput {
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

const ButtonRelay_T: FC<ButtonRelay_TInput> = (props: ButtonRelay_TInput) => {
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
      name={`FrooxEngine.UIX.ButtonRelay\`1[${[T]}]`}
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
        content={DoublePressDelay} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ReleasePressInterval"
        content={ReleasePressInterval} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Argument"
        content={Argument} /* default: null */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler\`1[${T}]]`}
        name="ButtonPressed"
        content={ButtonPressed} /* default: null */
      />
    </component>
  );
};

export default ButtonRelay_T;
