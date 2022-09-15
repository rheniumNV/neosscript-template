import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicValueVariableDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  VariableName?: member<any>;
  Target?: member<any>;
  DefaultValue?: member<any>;
}

const DynamicValueVariableDriver_T: FC<DynamicValueVariableDriver_TInput> = (
  props: DynamicValueVariableDriver_TInput
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
    Target,
    DefaultValue,
  } = props;

  return (
    <component
      name={`FrooxEngine.DynamicValueVariableDriver\`1[${[T]}]`}
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
        type={`FrooxEngine.FieldDrive\`1[${T}]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="DefaultValue"
        content={DefaultValue} /* default: null */
      />
    </component>
  );
};

export default DynamicValueVariableDriver_T;
