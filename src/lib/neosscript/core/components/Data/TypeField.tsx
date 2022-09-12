import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TypeFieldInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Type?: member<any>;
}

const TypeField: FC<TypeFieldInput> = (props: TypeFieldInput) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Type } = props;

  return (
    <component
      name="FrooxEngine.TypeField"
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
        type={`FrooxEngine.SyncType`}
        name="Type"
        content={Type} /* default: <i>null</i> */
      />
    </component>
  );
};

export default TypeField;
