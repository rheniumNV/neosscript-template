import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BooleanReferenceDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  State?: member<boolean>;
  TargetReference?: member<any>;
  FalseTarget?: member<any>;
  TrueTarget?: member<any>;
}

const BooleanReferenceDriver_T: FC<BooleanReferenceDriver_TInput> = (
  props: BooleanReferenceDriver_TInput
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
    TargetReference,
    FalseTarget,
    TrueTarget,
  } = props;

  return (
    <component
      name={`FrooxEngine.BooleanReferenceDriver\`1[${[T]}]`}
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
        type={`FrooxEngine.RefDrive\`1[${T}]`}
        name="TargetReference"
        content={TargetReference} /* default: null */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[${T}]`}
        name="FalseTarget"
        content={FalseTarget} /* default: null */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[${T}]`}
        name="TrueTarget"
        content={TrueTarget} /* default: null */
      />
    </component>
  );
};

export default BooleanReferenceDriver_T;
