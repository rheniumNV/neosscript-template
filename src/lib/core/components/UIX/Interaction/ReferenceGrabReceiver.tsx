import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ReferenceGrabReceiverInput {
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
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.ISyncRef]"
        name="TargetReference"
        content={TargetReference}
      />
    </component>
  );
};

export default ReferenceGrabReceiver;
