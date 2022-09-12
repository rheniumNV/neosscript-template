import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicVariableStatus_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  VariableName?: member<any>;
  IsLinkedToSpace?: member<any>;
  VariableExists?: member<any>;
}

const DynamicVariableStatus_T: FC<DynamicVariableStatus_TInput> = (
  props: DynamicVariableStatus_TInput
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
    IsLinkedToSpace,
    VariableExists,
  } = props;

  return (
    <component
      name={`FrooxEngine.DynamicVariableStatus\`1[${[T]}]`}
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
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="IsLinkedToSpace"
        content={IsLinkedToSpace} /* default: null */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="VariableExists"
        content={VariableExists} /* default: null */
      />
    </component>
  );
};

export default DynamicVariableStatus_T;
