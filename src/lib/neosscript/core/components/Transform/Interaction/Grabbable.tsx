import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GrabbableInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ReparentOnRelease?: member<boolean>;
  PreserveUserSpace?: member<boolean>;
  DestroyOnRelease?: member<boolean>;
  GrabPriority?: member<number>;
  GrabPriorityWhenGrabbed?: member<any>;
  CustomCanGrabCheck?: member<any>;
  EditModeOnly?: member<boolean>;
  AllowSteal?: member<boolean>;
  DropOnDisable?: member<boolean>;
  ActiveUserFilter?: member<any>;
  OnlyUsers?: member<any>;
  Scalable?: member<boolean>;
  Receivable?: member<boolean>;
  AllowOnlyPhysicalGrab?: member<boolean>;
  _grabber?: member<any>;
  _lastParent?: member<any>;
  _lastParentIsUserSpace?: member<boolean>;
  __legacyActiveUserRootOnly?: member<boolean>;
}

const Grabbable: FC<GrabbableInput> = (props: GrabbableInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ReparentOnRelease,
    PreserveUserSpace,
    DestroyOnRelease,
    GrabPriority,
    GrabPriorityWhenGrabbed,
    CustomCanGrabCheck,
    EditModeOnly,
    AllowSteal,
    DropOnDisable,
    ActiveUserFilter,
    OnlyUsers,
    Scalable,
    Receivable,
    AllowOnlyPhysicalGrab,
    _grabber,
    _lastParent,
    _lastParentIsUserSpace,
    __legacyActiveUserRootOnly,
  } = props;

  return (
    <component
      name="FrooxEngine.Grabbable"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
      version={2}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ReparentOnRelease"
        content={ReparentOnRelease} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PreserveUserSpace"
        content={PreserveUserSpace} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DestroyOnRelease"
        content={DestroyOnRelease} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="GrabPriority"
        content={GrabPriority} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`}
        name="GrabPriorityWhenGrabbed"
        content={GrabPriorityWhenGrabbed} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.GrabCheck]`}
        name="CustomCanGrabCheck"
        content={CustomCanGrabCheck} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="EditModeOnly"
        content={EditModeOnly} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowSteal"
        content={AllowSteal} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DropOnDisable"
        content={DropOnDisable} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`}
        name="ActiveUserFilter"
        content={ActiveUserFilter} /* default: Disabled */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`}
        name="OnlyUsers"
        content={
          OnlyUsers
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Scalable"
        content={Scalable} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Receivable"
        content={Receivable} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowOnlyPhysicalGrab"
        content={AllowOnlyPhysicalGrab} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`}
        name="_grabber"
        content={_grabber} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="_lastParent"
        content={_lastParent} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="_lastParentIsUserSpace"
        content={_lastParentIsUserSpace} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="__legacyActiveUserRootOnly"
        content={__legacyActiveUserRootOnly} /* default: False */
      />
    </component>
  );
};

export default Grabbable;
