import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonEnumShift_EInput {
  type: { E: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetValue?: member<any>;
  ShiftDelta?: member<number>;
}

const ButtonEnumShift_E: FC<ButtonEnumShift_EInput> = (
  props: ButtonEnumShift_EInput
) => {
  const {
    type: {
      E: { name: E },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetValue,
    ShiftDelta,
  } = props;

  return (
    <component
      name={`FrooxEngine.ButtonEnumShift\`1[${[E]}]`}
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[E]]`}
        name="TargetValue"
        content={TargetValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="ShiftDelta"
        content={ShiftDelta} /* default: null */
      />
    </component>
  );
};

export default ButtonEnumShift_E;
