import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Lerp"
        content={Lerp}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="SourceRect"
        content={SourceRect}
      />
    </component>
  );
};

export default RectTransformLerp;
