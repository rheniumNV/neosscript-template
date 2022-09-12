import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Float4DriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  X?: member<any>;
  Y?: member<any>;
  Z?: member<any>;
  W?: member<any>;
  Target?: member<any>;
}

const Float4Driver: FC<Float4DriverInput> = (props: Float4DriverInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    X,
    Y,
    Z,
    W,
    Target,
  } = props;

  return (
    <component
      name="FrooxEngine.Float4Driver"
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.Sync\`1[System.Single]]`}
        name="W"
        content={W} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float4]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
    </component>
  );
};

export default Float4Driver;
