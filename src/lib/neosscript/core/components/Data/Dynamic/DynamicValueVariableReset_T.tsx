import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicValueVariableReset_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  VariableName?: member<any>;
  ResetOnLoad?: member<boolean>;
  ResetOnDuplicate?: member<boolean>;
  ResetOnPaste?: member<boolean>;
  ResetValue?: member<any>;
}

const DynamicValueVariableReset_T: FC<DynamicValueVariableReset_TInput> = (
  props: DynamicValueVariableReset_TInput
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
    VariableName,
    ResetOnLoad,
    ResetOnDuplicate,
    ResetOnPaste,
    ResetValue,
  } = props;

  return (
    <component
      name={`FrooxEngine.DynamicValueVariableReset\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="VariableName"
        content={VariableName} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ResetOnLoad"
        content={ResetOnLoad} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ResetOnDuplicate"
        content={ResetOnDuplicate} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ResetOnPaste"
        content={ResetOnPaste} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="ResetValue"
        content={ResetValue} /* default: null */
      />
    </component>
  );
};

export default DynamicValueVariableReset_T;
