import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SampleAnimationTrack_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Animation?: member<any>;
  TrackIndex?: member<any>;
  Time?: member<any>;
}

const SampleAnimationTrack_T: FC<SampleAnimationTrack_TInput> = (
  props: SampleAnimationTrack_TInput
) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Animation,
    TrackIndex,
    Time,
  } = props;

  return (
    <component
      name={`FrooxEngine.LogiX.Assets.SampleAnimationTrack\`1[${[T]}]`}
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
        type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`}
        name="_activeVisual"
        content={_activeVisual} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Animation]`}
        name="Animation"
        content={Animation} /* default: null */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Int32]`}
        name="TrackIndex"
        content={TrackIndex} /* default: null */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Single]`}
        name="Time"
        content={Time} /* default: null */
      />
    </component>
  );
};

export default SampleAnimationTrack_T;
