import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AspectRatioFitterInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AspectRatio?: member<number>;
}

const AspectRatioFitter: FC<AspectRatioFitterInput> = (
  props: AspectRatioFitterInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, AspectRatio } =
    props;

  return (
    <component
      name="FrooxEngine.UIX.AspectRatioFitter"
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
        name="AspectRatio"
        content={AspectRatio} /* default: 0 */
      />
    </component>
  );
};

export default AspectRatioFitter;
