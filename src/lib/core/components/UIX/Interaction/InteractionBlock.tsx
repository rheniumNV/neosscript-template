import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
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
    UpdateOrder,
    Enabled,
    TouchExitLock,
    TouchEnterLock,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.InteractionBlock"
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
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="TouchExitLock"
        content={TouchExitLock} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="TouchEnterLock"
        content={TouchEnterLock} /* default: False */
      />
    </component>
  );
};

export default InteractionBlock;
