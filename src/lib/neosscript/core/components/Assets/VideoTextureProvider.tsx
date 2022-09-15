import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VideoTextureProviderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
  Stream?: member<boolean>;
  Volume?: member<number>;
  ForcePlaybackEngine?: member<any>;
  ForceVideoStreamingServiceParsing?: member<boolean>;
  CurrentPlaybackEngine?: member<any>;
  CurrentClockError?: member<any>;
  FilterMode?: member<any>;
  AnisotropicLevel?: member<number>;
  WrapModeU?: member<any>;
  WrapModeV?: member<any>;
  AudioTrackIndex?: member<any>;
  PreferAudioOnly?: member<boolean>;
  MaxWidth?: member<any>;
  MaxHeight?: member<any>;
}

const VideoTextureProvider: FC<VideoTextureProviderInput> = (
  props: VideoTextureProviderInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    URL,
    Stream,
    Volume,
    ForcePlaybackEngine,
    ForceVideoStreamingServiceParsing,
    CurrentPlaybackEngine,
    CurrentClockError,
    FilterMode,
    AnisotropicLevel,
    WrapModeU,
    WrapModeV,
    AudioTrackIndex,
    PreferAudioOnly,
    MaxWidth,
    MaxHeight,
  } = props;

  return (
    <component
      name="FrooxEngine.VideoTextureProvider"
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
        type={`FrooxEngine.Sync\`1[System.Uri]`}
        name="URL"
        content={URL} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Stream"
        content={Stream} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Volume"
        content={Volume} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="ForcePlaybackEngine"
        content={ForcePlaybackEngine} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ForceVideoStreamingServiceParsing"
        content={ForceVideoStreamingServiceParsing} /* default: False */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="CurrentPlaybackEngine"
        content={
          CurrentPlaybackEngine
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="CurrentClockError"
        content={
          CurrentClockError
        } /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`}
        name="FilterMode"
        content={FilterMode} /* default: Point */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="AnisotropicLevel"
        content={AnisotropicLevel} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`}
        name="WrapModeU"
        content={WrapModeU} /* default: Repeat */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`}
        name="WrapModeV"
        content={WrapModeV} /* default: Repeat */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`}
        name="AudioTrackIndex"
        content={AudioTrackIndex} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PreferAudioOnly"
        content={PreferAudioOnly} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`}
        name="MaxWidth"
        content={MaxWidth} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`}
        name="MaxHeight"
        content={MaxHeight} /* default: <i>null</i> */
      />
    </component>
  );
};

export default VideoTextureProvider;
