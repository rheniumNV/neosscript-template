import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BooleanSwitcherInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AutoAddChildren?: member<boolean>;
  Targets?: member<any>;
  ActiveIndex?: member<number>;
}

const BooleanSwitcher: FC<BooleanSwitcherInput> = (
  props: BooleanSwitcherInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    AutoAddChildren,
    Targets,
    ActiveIndex,
  } = props;

  return (
    <component
      name="FrooxEngine.BooleanSwitcher"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoAddChildren"
        content={AutoAddChildren} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Boolean]]`}
        name="Targets"
        content={
          Targets
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Boolean]] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="ActiveIndex"
        content={ActiveIndex} /* default: 0 */
      />
    </component>
  );
};

export default BooleanSwitcher;
