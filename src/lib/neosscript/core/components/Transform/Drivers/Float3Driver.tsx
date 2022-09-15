import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Float3DriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  X?: member<any>;
  Y?: member<any>;
  Z?: member<any>;
  Target?: member<any>;
}

const Float3Driver: FC<Float3DriverInput> = (props: Float3DriverInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    X,
    Y,
    Z,
    Target,
  } = props;

  return (
    <component
      name="FrooxEngine.Float3Driver"
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.Sync\`1[System.Single]]`}
        name="X"
        content={X} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.Sync\`1[System.Single]]`}
        name="Y"
        content={Y} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.Sync\`1[System.Single]]`}
        name="Z"
        content={Z} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
    </component>
  );
};

export default Float3Driver;
