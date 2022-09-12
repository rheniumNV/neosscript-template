import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FlipAtUserInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  UpSpace?: member<any>;
  _rotation?: member<any>;
}

const FlipAtUser: FC<FlipAtUserInput> = (props: FlipAtUserInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    UpSpace,
    _rotation,
  } = props;

  return (
    <component
      name="FrooxEngine.FlipAtUser"
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
        type={`FrooxEngine.RootSpace`}
        name="UpSpace"
        content={
          UpSpace
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotation"
        content={_rotation} /* default: ID0 */
      />
    </component>
  );
};

export default FlipAtUser;
