import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VideoExportableInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Video?: member<any>;
}

const VideoExportable: FC<VideoExportableInput> = (
  props: VideoExportableInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Video } =
    props;

  return (
    <component
      name="FrooxEngine.VideoExportable"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.VideoTexture]`}
        name="Video"
        content={Video} /* default: ID0 */
      />
    </component>
  );
};

export default VideoExportable;
