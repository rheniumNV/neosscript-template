import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

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
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.Slot]"
        name="SectionRoot"
        content={SectionRoot} /* default: ID0 */
      />
    </component>
  );
};

export default Expander;
