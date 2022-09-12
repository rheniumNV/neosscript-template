import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioStreamSpawnerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  BitrateKbps?: member<number>;
  DeviceName?: member<any>;
  _bitrateString?: member<any>;
}

const AudioStreamSpawner: FC<AudioStreamSpawnerInput> = (
  props: AudioStreamSpawnerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    BitrateKbps,
    DeviceName,
    _bitrateString,
  } = props;

  return (
    <component
      name="FrooxEngine.AudioStreamSpawner"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BitrateKbps"
        content={BitrateKbps} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="DeviceName"
        content={DeviceName} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="_bitrateString"
        content={_bitrateString} /* default: <i>null</i> */
      />
    </component>
  );
};

export default AudioStreamSpawner;
