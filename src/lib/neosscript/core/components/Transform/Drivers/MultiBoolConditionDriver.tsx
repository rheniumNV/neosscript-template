import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MultiBoolConditionDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  Mode?: member<any>;
  Conditions?: member<any>;
}

const MultiBoolConditionDriver: FC<MultiBoolConditionDriverInput> = (
  props: MultiBoolConditionDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    Mode,
    Conditions,
  } = props;

  return (
    <component
      name="FrooxEngine.MultiBoolConditionDriver"
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
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.MultiBoolConditionDriver+ConditionMode]`}
        name="Mode"
        content={Mode} /* default: All */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.MultiBoolConditionDriver+Condition]`}
        name="Conditions"
        content={
          Conditions
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.MultiBoolConditionDriver+Condition] */
      />
    </component>
  );
};

export default MultiBoolConditionDriver;
