import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FindAnimationTrackIndexInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Animation?: member<any>;
  Node?: member<any>;
  Property?: member<any>;
}

const FindAnimationTrackIndex: FC<FindAnimationTrackIndexInput> = (
  props: FindAnimationTrackIndexInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Animation,
    Node,
    Property,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Assets.FindAnimationTrackIndex"
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
        content={Animation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.String]`}
        name="Node"
        content={Node} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.String]`}
        name="Property"
        content={Property} /* default: ID0 */
      />
    </component>
  );
};

export default FindAnimationTrackIndex;
