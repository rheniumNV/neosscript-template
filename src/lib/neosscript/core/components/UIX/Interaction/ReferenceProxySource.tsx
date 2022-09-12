import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReferenceProxySourceInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Reference?: member<any>;
}

const ReferenceProxySource: FC<ReferenceProxySourceInput> = (
  props: ReferenceProxySourceInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Reference } =
    props;

  return (
    <component
      name="FrooxEngine.ReferenceProxySource"
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
        type={`FrooxEngine.SyncRef`}
        name="Reference"
        content={Reference} /* default: ID0 */
      />
    </component>
  );
};

export default ReferenceProxySource;
