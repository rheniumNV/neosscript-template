import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UserInterfaceEditModeSyncInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetUser?: member<any>;
  EditModeActive?: member<boolean>;
}

const UserInterfaceEditModeSync: FC<UserInterfaceEditModeSyncInput> = (
  props: UserInterfaceEditModeSyncInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetUser,
    EditModeActive,
  } = props;

  return (
    <component
      name="FrooxEngine.UserInterfaceEditModeSync"
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
        type={`FrooxEngine.UserRef`}
        name="TargetUser"
        content={
          TargetUser
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="EditModeActive"
        content={EditModeActive} /* default: False */
      />
    </component>
  );
};

export default UserInterfaceEditModeSync;
