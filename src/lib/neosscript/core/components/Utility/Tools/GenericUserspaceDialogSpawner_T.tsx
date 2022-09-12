import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GenericUserspaceDialogSpawner_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Initializer?: member<any>;
}

const GenericUserspaceDialogSpawner_T: FC<
  GenericUserspaceDialogSpawner_TInput
> = (props: GenericUserspaceDialogSpawner_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Initializer,
  } = props;

  return (
    <component
      name={`FrooxEngine.GenericUserspaceDialogSpawner\`1[${[T]}]`}
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
        type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[${T}]]`}
        name="Initializer"
        content={Initializer} /* default: null */
      />
    </component>
  );
};

export default GenericUserspaceDialogSpawner_T;
