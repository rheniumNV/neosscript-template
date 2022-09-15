import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicValueVariable_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  VariableName?: member<any>;
  Value?: member<any>;
  OverrideOnLink?: member<boolean>;
}

const DynamicValueVariable_T: FC<DynamicValueVariable_TInput> = (
  props: DynamicValueVariable_TInput
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
    Value,
    OverrideOnLink,
  } = props;

  return (
    <component
      name={`FrooxEngine.DynamicValueVariable\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Value"
        content={Value} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OverrideOnLink"
        content={OverrideOnLink} /* default: null */
      />
    </component>
  );
};

export default DynamicValueVariable_T;
