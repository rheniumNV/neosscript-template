import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DroneCameraInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  CameraUser?: member<any>;
  SimulateOnHost?: member<boolean>;
  ManualControl?: member<boolean>;
  SlowSpeed?: member<number>;
  Speed?: member<number>;
  FastSpeed?: member<number>;
  MouseSensitivity?: member<number>;
  FieldOfViewSource?: member<any>;
  FieldOfView?: member<number>;
  AspectRatioSource?: member<any>;
  AspectRatio?: member<number>;
  FollowUser?: member<any>;
  ControllerRejectDistance?: member<number>;
  GroupSearchRadius?: member<number>;
  BiggestGroupSearchInterval?: member<number>;
  IgnoreOtherCameras?: member<boolean>;
  HeadForwardPointDistance?: member<number>;
  HeadBackwardPointDistance?: member<number>;
  HeadUpPointDistance?: member<number>;
  HeadDownPointDistance?: member<number>;
  HeightOffset?: member<number>;
  CircleOffset?: member<number>;
  DistanceOffset?: member<number>;
  CircleSpeed?: member<number>;
  PositionSpeed?: member<number>;
  LookSpeed?: member<number>;
  DistanceSpeed?: member<number>;
  UserInfluenceSpeed?: member<number>;
  HeightAmplitude?: member<number>;
  DistanceAmplitude?: member<number>;
  CircleAmplitude?: member<number>;
  HeightPeriod?: member<number>;
  DistancePeriod?: member<number>;
  CirclePeriod?: member<number>;
  CirclePeriodNoiseSpeed?: member<number>;
  CirclePeriodNoiseInfluence?: member<number>;
  CheckOcclusion?: member<boolean>;
  AdjustHeightOnOcclusion?: member<boolean>;
  TeleportWaitTime?: member<number>;
  TeleportTriggerRelativeDistance?: member<number>;
  TeleportTriggerAngle?: member<number>;
  MinRandomizeFovInterval?: member<number>;
  MaxRandomizeFovInterval?: member<number>;
  MinFov?: member<number>;
  MaxFov?: member<number>;
  MinChangeFovTime?: member<number>;
  MaxChangeFovTime?: member<number>;
}

const DroneCamera: FC<DroneCameraInput> = (props: DroneCameraInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    CameraUser,
    SimulateOnHost,
    ManualControl,
    SlowSpeed,
    Speed,
    FastSpeed,
    MouseSensitivity,
    FieldOfViewSource,
    FieldOfView,
    AspectRatioSource,
    AspectRatio,
    FollowUser,
    ControllerRejectDistance,
    GroupSearchRadius,
    BiggestGroupSearchInterval,
    IgnoreOtherCameras,
    HeadForwardPointDistance,
    HeadBackwardPointDistance,
    HeadUpPointDistance,
    HeadDownPointDistance,
    HeightOffset,
    CircleOffset,
    DistanceOffset,
    CircleSpeed,
    PositionSpeed,
    LookSpeed,
    DistanceSpeed,
    UserInfluenceSpeed,
    HeightAmplitude,
    DistanceAmplitude,
    CircleAmplitude,
    HeightPeriod,
    DistancePeriod,
    CirclePeriod,
    CirclePeriodNoiseSpeed,
    CirclePeriodNoiseInfluence,
    CheckOcclusion,
    AdjustHeightOnOcclusion,
    TeleportWaitTime,
    TeleportTriggerRelativeDistance,
    TeleportTriggerAngle,
    MinRandomizeFovInterval,
    MaxRandomizeFovInterval,
    MinFov,
    MaxFov,
    MinChangeFovTime,
    MaxChangeFovTime,
  } = props;

  return (
    <component
      name="FrooxEngine.DroneCamera"
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
        name="CameraUser"
        content={
          CameraUser
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="SimulateOnHost"
        content={SimulateOnHost} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ManualControl"
        content={ManualControl} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SlowSpeed"
        content={SlowSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Speed"
        content={Speed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FastSpeed"
        content={FastSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MouseSensitivity"
        content={MouseSensitivity} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`}
        name="FieldOfViewSource"
        content={FieldOfViewSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FieldOfView"
        content={FieldOfView} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`}
        name="AspectRatioSource"
        content={AspectRatioSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AspectRatio"
        content={AspectRatio} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`}
        name="FollowUser"
        content={FollowUser} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ControllerRejectDistance"
        content={ControllerRejectDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="GroupSearchRadius"
        content={GroupSearchRadius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BiggestGroupSearchInterval"
        content={BiggestGroupSearchInterval} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IgnoreOtherCameras"
        content={IgnoreOtherCameras} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeadForwardPointDistance"
        content={HeadForwardPointDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeadBackwardPointDistance"
        content={HeadBackwardPointDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeadUpPointDistance"
        content={HeadUpPointDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeadDownPointDistance"
        content={HeadDownPointDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeightOffset"
        content={HeightOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CircleOffset"
        content={CircleOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DistanceOffset"
        content={DistanceOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CircleSpeed"
        content={CircleSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PositionSpeed"
        content={PositionSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LookSpeed"
        content={LookSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DistanceSpeed"
        content={DistanceSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="UserInfluenceSpeed"
        content={UserInfluenceSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeightAmplitude"
        content={HeightAmplitude} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DistanceAmplitude"
        content={DistanceAmplitude} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CircleAmplitude"
        content={CircleAmplitude} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeightPeriod"
        content={HeightPeriod} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DistancePeriod"
        content={DistancePeriod} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CirclePeriod"
        content={CirclePeriod} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CirclePeriodNoiseSpeed"
        content={CirclePeriodNoiseSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CirclePeriodNoiseInfluence"
        content={CirclePeriodNoiseInfluence} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CheckOcclusion"
        content={CheckOcclusion} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AdjustHeightOnOcclusion"
        content={AdjustHeightOnOcclusion} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TeleportWaitTime"
        content={TeleportWaitTime} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TeleportTriggerRelativeDistance"
        content={TeleportTriggerRelativeDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TeleportTriggerAngle"
        content={TeleportTriggerAngle} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinRandomizeFovInterval"
        content={MinRandomizeFovInterval} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxRandomizeFovInterval"
        content={MaxRandomizeFovInterval} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinFov"
        content={MinFov} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxFov"
        content={MaxFov} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinChangeFovTime"
        content={MinChangeFovTime} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxChangeFovTime"
        content={MaxChangeFovTime} /* default: 0 */
      />
    </component>
  );
};

export default DroneCamera;
