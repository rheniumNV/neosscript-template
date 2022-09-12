import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioOutputDeviceInfoInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DeviceIndex?: member<number>;
  DeviceName?: member<any>;
}

const AudioOutputDeviceInfo: FC<AudioOutputDeviceInfoInput> = (
  props: AudioOutputDeviceInfoInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DeviceIndex,
    DeviceName,
  } = props;

  return (
    <component
      name="FrooxEngine.AudioOutputDeviceInfo"
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
    </component>
  );
};

export default AudioOutputDeviceInfo;
