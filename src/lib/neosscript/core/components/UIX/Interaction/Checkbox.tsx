import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CheckboxInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  State?: member<boolean>;
  TargetState?: member<any>;
  CheckVisual?: member<any>;
}

const Checkbox: FC<CheckboxInput> = (props: CheckboxInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    State,
    TargetState,
    CheckVisual,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.Checkbox"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="State"
        content={State} /* default: False */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Boolean]]`}
        name="TargetState"
        content={TargetState} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="CheckVisual"
        content={CheckVisual} /* default: ID0 */
      />
    </component>
  );
};

export default Checkbox;
