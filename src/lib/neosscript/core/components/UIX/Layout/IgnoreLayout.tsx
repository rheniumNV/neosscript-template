import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface IgnoreLayoutInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
}

const IgnoreLayout: FC<IgnoreLayoutInput> = (props: IgnoreLayoutInput) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled } = props;

  return (
    <component
      name="FrooxEngine.UIX.IgnoreLayout"
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
    </component>
  );
};

export default IgnoreLayout;
