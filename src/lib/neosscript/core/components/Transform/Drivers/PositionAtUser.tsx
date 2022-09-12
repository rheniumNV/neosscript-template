import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PositionAtUserInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetUser?: member<any>;
  PositionAtLocalUser?: member<boolean>;
  TargetPositionOffset?: member<[number, number, number]>;
  TargetRotationOffset?: member<any>;
  PositionOffset?: member<[number, number, number]>;
  RotationOffset?: member<any>;
  PositionSource?: member<any>;
  RotationSource?: member<any>;
  PositionDrive?: member<any>;
  RotationDrive?: member<any>;
}

const PositionAtUser: FC<PositionAtUserInput> = (
  props: PositionAtUserInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetUser,
    PositionAtLocalUser,
    TargetPositionOffset,
    TargetRotationOffset,
    PositionOffset,
    RotationOffset,
    PositionSource,
    RotationSource,
    PositionDrive,
    RotationDrive,
  } = props;

  return (
    <component
      name="FrooxEngine.PositionAtUser"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`}
        name="TargetUser"
        content={TargetUser} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PositionAtLocalUser"
        content={PositionAtLocalUser} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetPositionOffset"
        content={TargetPositionOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="TargetRotationOffset"
        content={TargetRotationOffset} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="PositionOffset"
        content={PositionOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="RotationOffset"
        content={RotationOffset} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`}
        name="PositionSource"
        content={PositionSource} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`}
        name="RotationSource"
        content={RotationSource} /* default: None */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="PositionDrive"
        content={PositionDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="RotationDrive"
        content={RotationDrive} /* default: ID0 */
      />
    </component>
  );
};

export default PositionAtUser;
