import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ParentValue_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Tag?: member<any>;
  Value?: member<any>;
}

const ParentValue_T: FC<ParentValue_TInput> = (props: ParentValue_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Tag,
    Value,
  } = props;

  return (
    <component
      name={`FrooxEngine.ParentValue\`1[${[T]}]`}
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
        name="Tag"
        content={Tag} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Value"
        content={Value} /* default: null */
      />
    </component>
  );
};

export default ParentValue_T;
