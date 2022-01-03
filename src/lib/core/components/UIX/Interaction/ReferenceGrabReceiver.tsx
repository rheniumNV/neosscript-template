import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  TargetReference?: member<any>;
}

const ReferenceGrabReceiver: FC<ReferenceGrabReceiverInput> = (
  props: ReferenceGrabReceiverInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, TargetReference } = props;

  return (
    <component
      name="FrooxEngine.UIX.ReferenceGrabReceiver"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.ISyncRef]"
        name="TargetReference"
        content={TargetReference} /* default: ID0 */
      />
    </component>
  );
};

export default ReferenceGrabReceiver;
