import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueTextFormatDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  Format?: member<any>;
  Text?: member<string>;
}

const ValueTextFormatDriver_T: FC<ValueTextFormatDriver_TInput> = (
  props: ValueTextFormatDriver_TInput
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
    Source,
    Format,
    Text,
  } = props;

  return (
    <component
      name={`FrooxEngine.ValueTextFormatDriver\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Format"
        content={Format} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.String]`}
        name="Text"
        content={Text} /* default: null */
      />
    </component>
  );
};

export default ValueTextFormatDriver_T;
