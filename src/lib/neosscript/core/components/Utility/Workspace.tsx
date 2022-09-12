import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface WorkspaceInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  User?: member<any>;
  OverrideOwnerId?: member<any>;
  WorkspacePath?: member<any>;
  InitializeWorkspace?: member<any>;
  ReadOnly?: member<boolean>;
  AutosaveDelay?: member<number>;
  SuspendUpdates?: member<boolean>;
  _unsavedChanges?: member<boolean>;
}

const Workspace: FC<WorkspaceInput> = (props: WorkspaceInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    User,
    OverrideOwnerId,
    WorkspacePath,
    InitializeWorkspace,
    ReadOnly,
    AutosaveDelay,
    SuspendUpdates,
    _unsavedChanges,
  } = props;

  return (
    <component
      name="FrooxEngine.Workspace"
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
        name="User"
        content={
          User
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="OverrideOwnerId"
        content={OverrideOwnerId} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="WorkspacePath"
        content={WorkspacePath} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.Slot]]`}
        name="InitializeWorkspace"
        content={InitializeWorkspace} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ReadOnly"
        content={ReadOnly} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AutosaveDelay"
        content={AutosaveDelay} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="SuspendUpdates"
        content={SuspendUpdates} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="_unsavedChanges"
        content={_unsavedChanges} /* default: False */
      />
    </component>
  );
};

export default Workspace;
