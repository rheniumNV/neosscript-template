import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BooleanValueDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  State?: member<boolean>;
  TargetField?: member<any>;
  FalseValue?: member<any>;
  TrueValue?: member<any>;
}

const BooleanValueDriver_T: FC<BooleanValueDriver_TInput> = (
  props: BooleanValueDriver_TInput
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
    State,
    TargetField,
    FalseValue,
    TrueValue,
  } = props;

  return (
    <component
      name={`FrooxEngine.BooleanValueDriver\`1[${[T]}]`}
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
        content={State} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[${T}]`}
        name="TargetField"
        content={TargetField} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="FalseValue"
        content={FalseValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="TrueValue"
        content={TrueValue} /* default: null */
      />
    </component>
  );
};

export default BooleanValueDriver_T;
