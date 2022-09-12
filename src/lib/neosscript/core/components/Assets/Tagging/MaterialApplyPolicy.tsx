import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MaterialApplyPolicyInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  CanApply?: member<boolean>;
}

const MaterialApplyPolicy: FC<MaterialApplyPolicyInput> = (
  props: MaterialApplyPolicyInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, CanApply } =
    props;

  return (
    <component
      name="FrooxEngine.MaterialApplyPolicy"
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
        name="CanApply"
        content={CanApply} /* default: False */
      />
    </component>
  );
};

export default MaterialApplyPolicy;
