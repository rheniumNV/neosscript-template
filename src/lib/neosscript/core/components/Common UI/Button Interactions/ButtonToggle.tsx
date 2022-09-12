import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonToggleInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetValue?: member<any>;
}

const ButtonToggle: FC<ButtonToggleInput> = (props: ButtonToggleInput) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, TargetValue } =
    props;

  return (
    <component
      name="FrooxEngine.ButtonToggle"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Boolean]]`}
        name="TargetValue"
        content={TargetValue} /* default: ID0 */
      />
    </component>
  );
};

export default ButtonToggle;
