import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  TargetSize?: member<any>;
  Scale?: member<any>;
}

const RectSizeDriver: FC<RectSizeDriverInput> = (
  props: RectSizeDriverInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, TargetSize, Scale } = props;

  return (
    <component
      name="FrooxEngine.UIX.RectSizeDriver"
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
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="TargetSize"
        content={TargetSize} /* default: ID0 */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="Scale"
        content={Scale} /* default: [0; 0] */
      />
    </component>
  );
};

export default RectSizeDriver;
