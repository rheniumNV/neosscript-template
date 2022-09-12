import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface QuantityTextEditorParser_UInput {
  type: { U: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
}

const QuantityTextEditorParser_U: FC<QuantityTextEditorParser_UInput> = (
  props: QuantityTextEditorParser_UInput
) => {
  const {
    type: {
      U: { name: U },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
  } = props;

  return (
    <component
      name={`FrooxEngine.QuantityTextEditorParser\`1[${[U]}]`}
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    ></component>
  );
};

export default QuantityTextEditorParser_U;
