import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface RectSlotDriverInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  _position?: member<any>;
}

const RectSlotDriver: FC<RectSlotDriverInput> = (
  props: RectSlotDriverInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, _position } = props;

  return (
    <component
      name="FrooxEngine.UIX.RectSlotDriver"
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
        type="FrooxEngine.FieldDrive`1[BaseX.float3]"
        name="_position"
        content={_position}
      />
    </component>
  );
};

export default RectSlotDriver;
