import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueMultiplexer_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  Index?: member<number>;
  AllowWriteBack?: member<boolean>;
  Values?: member<any>;
}

const ValueMultiplexer_T: FC<ValueMultiplexer_TInput> = (
  props: ValueMultiplexer_TInput
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
    Index,
    AllowWriteBack,
    Values,
  } = props;

  return (
    <component
      name={`FrooxEngine.ValueMultiplexer\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Index"
        content={Index} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowWriteBack"
        content={AllowWriteBack} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Values"
        content={Values} /* default: null */
      />
    </component>
  );
};

export default ValueMultiplexer_T;
