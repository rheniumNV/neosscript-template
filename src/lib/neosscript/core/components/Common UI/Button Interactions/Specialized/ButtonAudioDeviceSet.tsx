import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonAudioDeviceSetInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DeviceIndex?: member<number>;
}

const ButtonAudioDeviceSet: FC<ButtonAudioDeviceSetInput> = (
  props: ButtonAudioDeviceSetInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, DeviceIndex } =
    props;

  return (
    <component
      name="FrooxEngine.ButtonAudioDeviceSet"
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
    </component>
  );
};

export default ButtonAudioDeviceSet;
