import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicReference_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  VariableName?: member<any>;
  TargetReference?: member<any>;
  OverrideOnLink?: member<boolean>;
}

const DynamicReference_T: FC<DynamicReference_TInput> = (
  props: DynamicReference_TInput
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
    TargetReference,
    OverrideOnLink,
  } = props;

  return (
    <component
      name={`FrooxEngine.DynamicReference\`1[${[T]}]`}
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`}
        name="TargetReference"
        content={TargetReference} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OverrideOnLink"
        content={OverrideOnLink} /* default: null */
      />
    </component>
  );
};

export default DynamicReference_T;
