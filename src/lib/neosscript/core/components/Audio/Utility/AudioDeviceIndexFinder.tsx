import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioDeviceIndexFinderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DeviceIndex?: member<number>;
  DeviceName?: member<any>;
  CaseSensitive?: member<boolean>;
  AllowPartialMatch?: member<boolean>;
}

const AudioDeviceIndexFinder: FC<AudioDeviceIndexFinderInput> = (
  props: AudioDeviceIndexFinderInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DeviceIndex,
    DeviceName,
    CaseSensitive,
    AllowPartialMatch,
  } = props;

  return (
    <component
      name="FrooxEngine.AudioDeviceIndexFinder"
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
        name="CaseSensitive"
        content={CaseSensitive} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowPartialMatch"
        content={AllowPartialMatch} /* default: False */
      />
    </component>
  );
};

export default AudioDeviceIndexFinder;
