import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Panner1DInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _target?: member<any>;
  _offset?: member<number>;
  _preOffset?: member<number>;
  _speed?: member<number>;
  _repeat?: member<number>;
  PingPong?: member<boolean>;
}

const Panner1D: FC<Panner1DInput> = (props: Panner1DInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _target,
    _offset,
    _preOffset,
    _speed,
    _repeat,
    PingPong,
  } = props;

  return (
    <component
      name="FrooxEngine.Panner1D"
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
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="_target"
        content={_target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="_offset"
        content={_offset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="_preOffset"
        content={_preOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="_speed"
        content={_speed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="_repeat"
        content={_repeat} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PingPong"
        content={PingPong} /* default: False */
      />
    </component>
  );
};

export default Panner1D;
