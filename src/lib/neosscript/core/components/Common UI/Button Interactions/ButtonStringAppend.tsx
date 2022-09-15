import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonStringAppendInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetString?: member<any>;
  AppendString?: member<any>;
  AppendInFront?: member<boolean>;
}

const ButtonStringAppend: FC<ButtonStringAppendInput> = (
  props: ButtonStringAppendInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetString,
    AppendString,
    AppendInFront,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonStringAppend"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`}
        name="TargetString"
        content={TargetString} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="AppendString"
        content={AppendString} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AppendInFront"
        content={AppendInFront} /* default: False */
      />
    </component>
  );
};

export default ButtonStringAppend;
