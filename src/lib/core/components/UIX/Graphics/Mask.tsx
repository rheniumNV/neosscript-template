import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface MaskInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  ShowMaskGraphic?: member<boolean>;
}

const Mask: FC<MaskInput> = (props: MaskInput) => {
  const { id, persistentId, UpdateOrder, Enabled, ShowMaskGraphic } = props;

  return (
    <component name="FrooxEngine.UIX.Mask" id={id} persistentId={persistentId}>
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
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ShowMaskGraphic"
        content={ShowMaskGraphic}
      />
    </component>
  );
};

export default Mask;
