import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticAudioClipInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
  LoadMode?: member<any>;
  SampleRateMode?: member<any>;
}

const StaticAudioClip: FC<StaticAudioClipInput> = (
  props: StaticAudioClipInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    URL,
    LoadMode,
    SampleRateMode,
  } = props;

  return (
    <component
      name="FrooxEngine.StaticAudioClip"
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.AudioLoadMode]`}
        name="LoadMode"
        content={LoadMode} /* default: Automatic */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.SampleRateMode]`}
        name="SampleRateMode"
        content={SampleRateMode} /* default: Original */
      />
    </component>
  );
};

export default StaticAudioClip;
