import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioExportableInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Audio?: member<any>;
}

const AudioExportable: FC<AudioExportableInput> = (
  props: AudioExportableInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Audio } =
    props;

  return (
    <component
      name="FrooxEngine.AudioExportable"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`}
        name="Audio"
        content={Audio} /* default: ID0 */
      />
    </component>
  );
};

export default AudioExportable;
