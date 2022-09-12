import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioInputDeviceInfoInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DeviceIndex?: member<number>;
  DeviceName?: member<any>;
  IsNeosDefault?: member<boolean>;
  IsSystemDefault?: member<boolean>;
  DeviceType?: member<any>;
}

const AudioInputDeviceInfo: FC<AudioInputDeviceInfoInput> = (
  props: AudioInputDeviceInfoInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DeviceIndex,
    DeviceName,
    IsNeosDefault,
    IsSystemDefault,
    DeviceType,
  } = props;

  return (
    <component
      name="FrooxEngine.AudioInputDeviceInfo"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="DeviceIndex"
        content={DeviceIndex} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="DeviceName"
        content={DeviceName} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IsNeosDefault"
        content={IsNeosDefault} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IsSystemDefault"
        content={IsSystemDefault} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AudioInputType]`}
        name="DeviceType"
        content={DeviceType} /* default: Unknown */
      />
    </component>
  );
};

export default AudioInputDeviceInfo;
