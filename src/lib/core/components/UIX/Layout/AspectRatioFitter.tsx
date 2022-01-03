import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface AspectRatioFitterInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  AspectRatio?: member<number>;
}

const AspectRatioFitter: FC<AspectRatioFitterInput> = (
  props: AspectRatioFitterInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, AspectRatio } = props;

  return (
    <component
      name="FrooxEngine.UIX.AspectRatioFitter"
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
        name="AspectRatio"
        content={AspectRatio}
      />
    </component>
  );
};

export default AspectRatioFitter;
