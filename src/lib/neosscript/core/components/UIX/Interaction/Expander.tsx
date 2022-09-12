import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ExpanderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  SectionRoot?: member<any>;
}

const Expander: FC<ExpanderInput> = (props: ExpanderInput) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, SectionRoot } =
    props;

  return (
    <component
      name="FrooxEngine.UIX.Expander"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="SectionRoot"
        content={SectionRoot} /* default: ID0 */
      />
    </component>
  );
};

export default Expander;
