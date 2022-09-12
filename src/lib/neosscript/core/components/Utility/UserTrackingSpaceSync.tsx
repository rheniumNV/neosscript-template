import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UserTrackingSpaceSyncInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  SeatedMode?: member<boolean>;
  UserHeight?: member<number>;
}

const UserTrackingSpaceSync: FC<UserTrackingSpaceSyncInput> = (
  props: UserTrackingSpaceSyncInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    SeatedMode,
    UserHeight,
  } = props;

  return (
    <component
      name="FrooxEngine.UserTrackingSpaceSync"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="SeatedMode"
        content={SeatedMode} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="UserHeight"
        content={UserHeight} /* default: 0 */
      />
    </component>
  );
};

export default UserTrackingSpaceSync;
