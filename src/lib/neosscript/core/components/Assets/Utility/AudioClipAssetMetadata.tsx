import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AudioClipAssetMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AudioClip?: member<any>;
  SampleRate?: member<any>;
  Channels?: member<any>;
  ChannelCount?: member<any>;
  SampleCount?: member<any>;
  Duration?: member<any>;
  Extension?: member<any>;
  CodecInfo?: member<any>;
  FullyDecoded?: member<any>;
}

const AudioClipAssetMetadata: FC<AudioClipAssetMetadataInput> = (
  props: AudioClipAssetMetadataInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    AudioClip,
    SampleRate,
    Channels,
    ChannelCount,
    SampleCount,
    Duration,
    Extension,
    CodecInfo,
    FullyDecoded,
  } = props;

  return (
    <component
      name="FrooxEngine.AudioClipAssetMetadata"
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
        name="AudioClip"
        content={AudioClip} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="SampleRate"
        content={
          SampleRate
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[CodeX.ChannelConfiguration]`}
        name="Channels"
        content={
          Channels
        } /* default: FrooxEngine.RawOutput`1[CodeX.ChannelConfiguration] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="ChannelCount"
        content={
          ChannelCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="SampleCount"
        content={
          SampleCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Double]`}
        name="Duration"
        content={Duration} /* default: FrooxEngine.RawOutput`1[System.Double] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="Extension"
        content={
          Extension
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="CodecInfo"
        content={
          CodecInfo
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="FullyDecoded"
        content={
          FullyDecoded
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
    </component>
  );
};

export default AudioClipAssetMetadata;
