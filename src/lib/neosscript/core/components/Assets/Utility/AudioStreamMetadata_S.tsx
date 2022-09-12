import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioStreamMetadata_SInput {
  type: { S: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
}

const AudioStreamMetadata_S: FC<AudioStreamMetadata_SInput> = (
  props: AudioStreamMetadata_SInput
) => {
  const {
    type: {
      S: { name: S },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
  } = props;

  return (
    <component
      name={`FrooxEngine.AudioStreamMetadata\`1[${[S]}]`}
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    ></component>
  );
};

export default AudioStreamMetadata_S;
