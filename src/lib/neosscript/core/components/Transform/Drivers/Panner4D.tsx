import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Panner4DInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _target?: member<any>;
  _offset?: member<[number, number, number, number]>;
  _preOffset?: member<[number, number, number, number]>;
  _speed?: member<[number, number, number, number]>;
  _repeat?: member<[number, number, number, number]>;
  PingPong?: member<boolean>;
}

const Panner4D: FC<Panner4DInput> = (props: Panner4DInput) => {
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
      name="FrooxEngine.Panner4D"
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
        name="_offset"
        content={_offset} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="_preOffset"
        content={_preOffset} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="_speed"
        content={_speed} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float4]`}
        name="_repeat"
        content={_repeat} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PingPong"
        content={PingPong} /* default: False */
      />
    </component>
  );
};

export default Panner4D;
