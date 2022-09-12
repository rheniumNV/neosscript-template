import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LookAtUserInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetUser?: member<any>;
  TargetAtLocalUser?: member<boolean>;
  SourcePositionOffset?: member<[number, number, number]>;
  Invert?: member<boolean>;
  RotationOffset?: member<any>;
  PositionSource?: member<any>;
  AroundAxis?: member<boolean>;
  Axis?: member<[number, number, number]>;
  _rotationDrive?: member<any>;
}

const LookAtUser: FC<LookAtUserInput> = (props: LookAtUserInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetUser,
    TargetAtLocalUser,
    SourcePositionOffset,
    Invert,
    RotationOffset,
    PositionSource,
    AroundAxis,
    Axis,
    _rotationDrive,
  } = props;

  return (
    <component
      name="FrooxEngine.LookAtUser"
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
        name="TargetAtLocalUser"
        content={TargetAtLocalUser} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="SourcePositionOffset"
        content={SourcePositionOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Invert"
        content={Invert} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="RotationOffset"
        content={RotationOffset} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.LookAtUser+UserNode]`}
        name="PositionSource"
        content={PositionSource} /* default: Root */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AroundAxis"
        content={AroundAxis} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Axis"
        content={Axis} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotationDrive"
        content={_rotationDrive} /* default: ID0 */
      />
    </component>
  );
};

export default LookAtUser;
