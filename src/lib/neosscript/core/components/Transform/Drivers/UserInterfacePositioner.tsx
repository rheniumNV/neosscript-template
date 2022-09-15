import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UserInterfacePositionerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetUser?: member<any>;
  UseHead?: member<boolean>;
  RotateVerticalOnly?: member<boolean>;
  PositionSpeed?: member<number>;
  RotationSpeed?: member<number>;
  ActivationDistance?: member<number>;
  ActivationAngle?: member<number>;
  DeactivationDistance?: member<number>;
  DeactivationAngle?: member<number>;
  TargetPosition?: member<[number, number, number]>;
  TargetRotation?: member<any>;
  _position?: member<any>;
  _rotation?: member<any>;
}

const UserInterfacePositioner: FC<UserInterfacePositionerInput> = (
  props: UserInterfacePositionerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetUser,
    UseHead,
    RotateVerticalOnly,
    PositionSpeed,
    RotationSpeed,
    ActivationDistance,
    ActivationAngle,
    DeactivationDistance,
    DeactivationAngle,
    TargetPosition,
    TargetRotation,
    _position,
    _rotation,
  } = props;

  return (
    <component
      name="FrooxEngine.UserInterfacePositioner"
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
        name="UseHead"
        content={UseHead} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="RotateVerticalOnly"
        content={RotateVerticalOnly} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PositionSpeed"
        content={PositionSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RotationSpeed"
        content={RotationSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ActivationDistance"
        content={ActivationDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ActivationAngle"
        content={ActivationAngle} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DeactivationDistance"
        content={DeactivationDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DeactivationAngle"
        content={DeactivationAngle} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetPosition"
        content={TargetPosition} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="TargetRotation"
        content={TargetRotation} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_position"
        content={_position} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotation"
        content={_rotation} /* default: ID0 */
      />
    </component>
  );
};

export default UserInterfacePositioner;
