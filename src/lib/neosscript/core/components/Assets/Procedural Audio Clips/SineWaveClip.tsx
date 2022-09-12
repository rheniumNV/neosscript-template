import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SineWaveClipInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  Frequency?: member<number>;
  Amplitude?: member<number>;
}

const SineWaveClip: FC<SineWaveClipInput> = (props: SineWaveClipInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    Frequency,
    Amplitude,
  } = props;

  return (
    <component
      name="FrooxEngine.SineWaveClip"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HighPriorityIntegration"
        content={HighPriorityIntegration} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Frequency"
        content={Frequency} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Amplitude"
        content={Amplitude} /* default: 0 */
      />
    </component>
  );
};

export default SineWaveClip;
