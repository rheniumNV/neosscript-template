import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReferenceGrabReceiverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetReference?: member<any>;
}

const ReferenceGrabReceiver: FC<ReferenceGrabReceiverInput> = (
  props: ReferenceGrabReceiverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetReference,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ReferenceGrabReceiver"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.ISyncRef]`}
        name="TargetReference"
        content={TargetReference} /* default: ID0 */
      />
    </component>
  );
};

export default ReferenceGrabReceiver;
