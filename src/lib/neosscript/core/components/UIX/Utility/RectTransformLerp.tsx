import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RectTransformLerpInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Lerp?: member<number>;
  SourceRect?: member<any>;
}

const RectTransformLerp: FC<RectTransformLerpInput> = (
  props: RectTransformLerpInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Lerp,
    SourceRect,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.RectTransformLerp"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Lerp"
        content={Lerp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="SourceRect"
        content={SourceRect} /* default: ID0 */
      />
    </component>
  );
};

export default RectTransformLerp;
