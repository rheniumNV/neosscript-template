import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
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
    UpdateOrder,
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
    Scalable,
    Receivable,
    AllowOnlyPhysicalGrab,
    _grabber,
    _lastParent,
    _lastParentIsUserSpace,
    __legacyActiveUserRootOnly,
  } = props;

  return (
    <component name="FrooxEngine.Grabbable" id={id} persistentId={persistentId}>
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
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ReparentOnRelease"
        content={ReparentOnRelease}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PreserveUserSpace"
        content={PreserveUserSpace}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="DestroyOnRelease"
        content={DestroyOnRelease}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="GrabPriority"
        content={GrabPriority}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Nullable`1[System.Int32]]"
        name="GrabPriorityWhenGrabbed"
        content={GrabPriorityWhenGrabbed}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.GrabCheck]"
        name="CustomCanGrabCheck"
        content={CustomCanGrabCheck}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="EditModeOnly"
        content={EditModeOnly}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AllowSteal"
        content={AllowSteal}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="DropOnDisable"
        content={DropOnDisable}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.ActiveUserHandling]"
        name="ActiveUserFilter"
        content={ActiveUserFilter}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Scalable"
        content={Scalable}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Receivable"
        content={Receivable}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AllowOnlyPhysicalGrab"
        content={AllowOnlyPhysicalGrab}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.Grabber]"
        name="_grabber"
        content={_grabber}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.Slot]"
        name="_lastParent"
        content={_lastParent}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="_lastParentIsUserSpace"
        content={_lastParentIsUserSpace}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="__legacyActiveUserRootOnly"
        content={__legacyActiveUserRootOnly}
      />
    </component>
  );
};

export default Grabbable;
