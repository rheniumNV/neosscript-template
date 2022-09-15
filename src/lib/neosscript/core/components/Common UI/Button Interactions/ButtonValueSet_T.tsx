import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonValueSet_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetValue?: member<any>;
  SetValue?: member<any>;
}

const ButtonValueSet_T: FC<ButtonValueSet_TInput> = (
  props: ButtonValueSet_TInput
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
    TargetValue,
    SetValue,
  } = props;

  return (
    <component
      name={`FrooxEngine.ButtonValueSet\`1[${[T]}]`}
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[${T}]]`}
        name="TargetValue"
        content={TargetValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="SetValue"
        content={SetValue} /* default: null */
      />
    </component>
  );
};

export default ButtonValueSet_T;
