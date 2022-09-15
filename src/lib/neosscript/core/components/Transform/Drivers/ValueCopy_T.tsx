import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueCopy_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  Target?: member<any>;
  WriteBack?: member<boolean>;
}

const ValueCopy_T: FC<ValueCopy_TInput> = (props: ValueCopy_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Source,
    Target,
    WriteBack,
  } = props;

  return (
    <component
      name={`FrooxEngine.ValueCopy\`1[${[T]}]`}
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
        name="Source"
        content={Source} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[${T}]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WriteBack"
        content={WriteBack} /* default: null */
      />
    </component>
  );
};

export default ValueCopy_T;
