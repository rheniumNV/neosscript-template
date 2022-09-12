import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueNoiseClipInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  Duration?: member<number>;
  Seed?: member<number>;
}

const ValueNoiseClip: FC<ValueNoiseClipInput> = (
  props: ValueNoiseClipInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    Duration,
    Seed,
  } = props;

  return (
    <component
      name="FrooxEngine.ValueNoiseClip"
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
        name="Duration"
        content={Duration} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Seed"
        content={Seed} /* default: 0 */
      />
    </component>
  );
};

export default ValueNoiseClip;
