import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Lerp?: member<number>;
  SourceRect?: member<any>;
}

const RectTransformLerp: FC<RectTransformLerpInput> = (
  props: RectTransformLerpInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, Lerp, SourceRect } = props;

  return (
    <component
      name="FrooxEngine.UIX.RectTransformLerp"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Lerp"
        content={Lerp} /* default: 0 */
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="SourceRect"
        content={SourceRect} /* default: ID0 */
      />
    </component>
  );
};

export default RectTransformLerp;
