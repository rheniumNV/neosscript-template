import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface InteractionBlockInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TouchExitLock?: member<boolean>;
  TouchEnterLock?: member<boolean>;
}

const InteractionBlock: FC<InteractionBlockInput> = (
  props: InteractionBlockInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TouchExitLock,
    TouchEnterLock,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.InteractionBlock"
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
        name="TouchExitLock"
        content={TouchExitLock} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="TouchEnterLock"
        content={TouchEnterLock} /* default: False */
      />
    </component>
  );
};

export default InteractionBlock;
