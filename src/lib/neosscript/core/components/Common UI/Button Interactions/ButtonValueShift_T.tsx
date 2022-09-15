import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonValueShift_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetValue?: member<any>;
  Delta?: member<any>;
  Min?: member<any>;
  Max?: member<any>;
  WrapAround?: member<boolean>;
}

const ButtonValueShift_T: FC<ButtonValueShift_TInput> = (
  props: ButtonValueShift_TInput
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
    Delta,
    Min,
    Max,
    WrapAround,
  } = props;

  return (
    <component
      name={`FrooxEngine.ButtonValueShift\`1[${[T]}]`}
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
        name="Delta"
        content={Delta} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Min"
        content={Min} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Max"
        content={Max} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WrapAround"
        content={WrapAround} /* default: null */
      />
    </component>
  );
};

export default ButtonValueShift_T;
