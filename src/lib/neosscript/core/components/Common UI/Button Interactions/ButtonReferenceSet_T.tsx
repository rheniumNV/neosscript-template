import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonReferenceSet_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetReference?: member<any>;
  SetReference?: member<any>;
}

const ButtonReferenceSet_T: FC<ButtonReferenceSet_TInput> = (
  props: ButtonReferenceSet_TInput
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
    TargetReference,
    SetReference,
  } = props;

  return (
    <component
      name={`FrooxEngine.ButtonReferenceSet\`1[${[T]}]`}
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncRef\`1[${T}]]`}
        name="TargetReference"
        content={TargetReference} /* default: null */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[${T}]`}
        name="SetReference"
        content={SetReference} /* default: null */
      />
    </component>
  );
};

export default ButtonReferenceSet_T;
