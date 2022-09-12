import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UserDistanceValueDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Node?: member<any>;
  Distance?: member<number>;
  TargetField?: member<any>;
  NearValue?: member<any>;
  FarValue?: member<any>;
}

const UserDistanceValueDriver_T: FC<UserDistanceValueDriver_TInput> = (
  props: UserDistanceValueDriver_TInput
) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Node,
    Distance,
    TargetField,
    NearValue,
    FarValue,
  } = props;

  return (
    <component
      name={`FrooxEngine.UserDistanceValueDriver\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`}
        name="Node"
        content={Node} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Distance"
        content={Distance} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[${T}]`}
        name="TargetField"
        content={TargetField} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="NearValue"
        content={NearValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="FarValue"
        content={FarValue} /* default: null */
      />
    </component>
  );
};

export default UserDistanceValueDriver_T;
