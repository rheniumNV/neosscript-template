import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueUserOverride_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  Default?: member<any>;
  CreateOverrideOnWrite?: member<boolean>;
  PersistentOverrides?: member<boolean>;
}

const ValueUserOverride_T: FC<ValueUserOverride_TInput> = (
  props: ValueUserOverride_TInput
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
    Target,
    Default,
    CreateOverrideOnWrite,
    PersistentOverrides,
  } = props;

  return (
    <component
      name={`FrooxEngine.ValueUserOverride\`1[${[T]}]`}
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
        type={`FrooxEngine.FieldDrive\`1[${T}]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Default"
        content={Default} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CreateOverrideOnWrite"
        content={CreateOverrideOnWrite} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PersistentOverrides"
        content={PersistentOverrides} /* default: null */
      />
    </component>
  );
};

export default ValueUserOverride_T;
