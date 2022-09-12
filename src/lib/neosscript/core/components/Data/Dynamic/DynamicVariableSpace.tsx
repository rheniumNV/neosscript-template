import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicVariableSpaceInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  SpaceName?: member<any>;
  OnlyDirectBinding?: member<boolean>;
}

const DynamicVariableSpace: FC<DynamicVariableSpaceInput> = (
  props: DynamicVariableSpaceInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    SpaceName,
    OnlyDirectBinding,
  } = props;

  return (
    <component
      name="FrooxEngine.DynamicVariableSpace"
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
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="SpaceName"
        content={SpaceName} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OnlyDirectBinding"
        content={OnlyDirectBinding} /* default: False */
      />
    </component>
  );
};

export default DynamicVariableSpace;
