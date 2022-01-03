import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ExpanderInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  SectionRoot?: member<any>;
}

const Expander: FC<ExpanderInput> = (props: ExpanderInput) => {
  const { id, persistentId, UpdateOrder, Enabled, SectionRoot } = props;

  return (
    <component
      name="FrooxEngine.UIX.Expander"
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
        type="FrooxEngine.SyncRef`1[FrooxEngine.Slot]"
        name="SectionRoot"
        content={SectionRoot}
      />
    </component>
  );
};

export default Expander;
