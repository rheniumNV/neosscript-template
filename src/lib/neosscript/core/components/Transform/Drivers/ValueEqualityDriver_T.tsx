import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueEqualityDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetValue?: member<any>;
  Reference?: member<any>;
  Target?: member<any>;
  UseApproximateComparison?: member<boolean>;
}

const ValueEqualityDriver_T: FC<ValueEqualityDriver_TInput> = (
  props: ValueEqualityDriver_TInput
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
    Reference,
    Target,
    UseApproximateComparison,
  } = props;

  return (
    <component
      name={`FrooxEngine.ValueEqualityDriver\`1[${[T]}]`}
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`}
        name="TargetValue"
        content={TargetValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Reference"
        content={Reference} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseApproximateComparison"
        content={UseApproximateComparison} /* default: null */
      />
    </component>
  );
};

export default ValueEqualityDriver_T;
