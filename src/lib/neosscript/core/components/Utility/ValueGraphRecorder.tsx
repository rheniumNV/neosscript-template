import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueGraphRecorderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  RecordingUser?: member<any>;
  SourceValue?: member<any>;
  UpdateInterval?: member<number>;
  Points?: member<number>;
  TargetArray?: member<any>;
  TargetArrayOffset?: member<any>;
  MinRangeAdjustThreshold?: member<number>;
  MinRangeAdjustMultiplier?: member<number>;
  MaxRangeAdjustThreshold?: member<number>;
  MaxRangeAdjustMultiplier?: member<number>;
  RangeMin?: member<any>;
  RangeMax?: member<any>;
  Drive?: member<boolean>;
  _arrayDrive?: member<any>;
  _arrayOffsetDrive?: member<any>;
  _rangeMinDrive?: member<any>;
  _rangeMaxDrive?: member<any>;
}

const ValueGraphRecorder: FC<ValueGraphRecorderInput> = (
  props: ValueGraphRecorderInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    RecordingUser,
    SourceValue,
    UpdateInterval,
    Points,
    TargetArray,
    TargetArrayOffset,
    MinRangeAdjustThreshold,
    MinRangeAdjustMultiplier,
    MaxRangeAdjustThreshold,
    MaxRangeAdjustMultiplier,
    RangeMin,
    RangeMax,
    Drive,
    _arrayDrive,
    _arrayOffsetDrive,
    _rangeMinDrive,
    _rangeMaxDrive,
  } = props;

  return (
    <component
      name="FrooxEngine.ValueGraphRecorder"
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
        name="RecordingUser"
        content={
          RecordingUser
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`}
        name="SourceValue"
        content={SourceValue} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="UpdateInterval"
        content={UpdateInterval} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Points"
        content={Points} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncArray\`1[System.Single]]`}
        name="TargetArray"
        content={TargetArray} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Int32]]`}
        name="TargetArrayOffset"
        content={TargetArrayOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinRangeAdjustThreshold"
        content={MinRangeAdjustThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinRangeAdjustMultiplier"
        content={MinRangeAdjustMultiplier} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxRangeAdjustThreshold"
        content={MaxRangeAdjustThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxRangeAdjustMultiplier"
        content={MaxRangeAdjustMultiplier} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`}
        name="RangeMin"
        content={RangeMin} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`}
        name="RangeMax"
        content={RangeMax} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Drive"
        content={Drive} /* default: False */
      />
      <Member
        type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncArray\`1[System.Single]]`}
        name="_arrayDrive"
        content={_arrayDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Int32]`}
        name="_arrayOffsetDrive"
        content={_arrayOffsetDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="_rangeMinDrive"
        content={_rangeMinDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="_rangeMaxDrive"
        content={_rangeMaxDrive} /* default: ID0 */
      />
    </component>
  );
};

export default ValueGraphRecorder;
