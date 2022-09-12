import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DestroyProxyInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DestroyTarget?: member<any>;
}

const DestroyProxy: FC<DestroyProxyInput> = (props: DestroyProxyInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DestroyTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.DestroyProxy"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IDestroyable]`}
        name="DestroyTarget"
        content={DestroyTarget} /* default: ID0 */
      />
    </component>
  );
};

export default DestroyProxy;
