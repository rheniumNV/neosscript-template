import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Wobbler4DInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _target?: member<any>;
  _baseValue?: member<[number, number, number, number]>;
  _speed?: member<[number, number, number, number]>;
  _magnitude?: member<[number, number, number, number]>;
  _seed?: member<[number, number, number, number]>;
}

const Wobbler4D: FC<Wobbler4DInput> = (props: Wobbler4DInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _target,
    _baseValue,
    _speed,
    _magnitude,
    _seed,
  } = props;

  return (
    <component
      name="FrooxEngine.Wobbler4D"
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
        type={`FrooxEngine.FieldDrive\`1[BaseX.float4]`}
        name="_target"
        content={_target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="_baseValue"
        content={_baseValue} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="_speed"
        content={_speed} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="_magnitude"
        content={_magnitude} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="_seed"
        content={_seed} /* default: [0; 0; 0; 0] */
      />
    </component>
  );
};

export default Wobbler4D;
