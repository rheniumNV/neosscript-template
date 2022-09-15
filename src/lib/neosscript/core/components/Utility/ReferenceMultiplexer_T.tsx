import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReferenceMultiplexer_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  Index?: member<number>;
  AllowWriteBack?: member<boolean>;
}

const ReferenceMultiplexer_T: FC<ReferenceMultiplexer_TInput> = (
  props: ReferenceMultiplexer_TInput
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
  } = props;

  return (
    <component
      name={`FrooxEngine.ReferenceMultiplexer\`1[${[T]}]`}
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
        type={`FrooxEngine.RefDrive\`1[${T}]`}
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
    </component>
  );
};

export default ReferenceMultiplexer_T;
