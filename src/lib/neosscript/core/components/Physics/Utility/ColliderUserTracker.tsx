import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ColliderUserTrackerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TriggersOnly?: member<boolean>;
  IsLocalUserInside?: member<any>;
  IsAnyUserInside?: member<any>;
  NumberOfUsersInside?: member<any>;
}

const ColliderUserTracker: FC<ColliderUserTrackerInput> = (
  props: ColliderUserTrackerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TriggersOnly,
    IsLocalUserInside,
    IsAnyUserInside,
    NumberOfUsersInside,
  } = props;

  return (
    <component
      name="FrooxEngine.ColliderUserTracker"
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
        name="TriggersOnly"
        content={TriggersOnly} /* default: False */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="IsLocalUserInside"
        content={
          IsLocalUserInside
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="IsAnyUserInside"
        content={
          IsAnyUserInside
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="NumberOfUsersInside"
        content={
          NumberOfUsersInside
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
    </component>
  );
};

export default ColliderUserTracker;
