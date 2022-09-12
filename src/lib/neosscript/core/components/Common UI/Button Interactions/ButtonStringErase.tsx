import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonStringEraseInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetString?: member<any>;
  Count?: member<number>;
  EraseFromBeginning?: member<boolean>;
}

const ButtonStringErase: FC<ButtonStringEraseInput> = (
  props: ButtonStringEraseInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetString,
    Count,
    EraseFromBeginning,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonStringErase"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`}
        name="TargetString"
        content={TargetString} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Count"
        content={Count} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="EraseFromBeginning"
        content={EraseFromBeginning} /* default: False */
      />
    </component>
  );
};

export default ButtonStringErase;
