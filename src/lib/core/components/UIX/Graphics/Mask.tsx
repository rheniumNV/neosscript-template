import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MaskInput {
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
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ShowMaskGraphic"
        content={ShowMaskGraphic} /* default: False */
      />
    </component>
  );
};

export default Mask;
