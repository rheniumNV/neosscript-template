import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LocalUserLiveStatusInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  IsLive?: member<any>;
}

const LocalUserLiveStatus: FC<LocalUserLiveStatusInput> = (
  props: LocalUserLiveStatusInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, IsLive } =
    props;

  return (
    <component
      name="FrooxEngine.LocalUserLiveStatus"
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
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="IsLive"
        content={IsLive} /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
    </component>
  );
};

export default LocalUserLiveStatus;
