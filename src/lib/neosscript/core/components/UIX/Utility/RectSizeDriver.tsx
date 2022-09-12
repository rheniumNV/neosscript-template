import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RectSizeDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetSize?: member<any>;
  Scale?: member<[number, number]>;
}

const RectSizeDriver: FC<RectSizeDriverInput> = (
  props: RectSizeDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetSize,
    Scale,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.RectSizeDriver"
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
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="TargetSize"
        content={TargetSize} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Scale"
        content={Scale} /* default: [0; 0] */
      />
    </component>
  );
};

export default RectSizeDriver;
