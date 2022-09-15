import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TimeIntDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Scale?: member<number>;
  Repeat?: member<number>;
  PingPong?: member<boolean>;
  Target?: member<any>;
}

const TimeIntDriver: FC<TimeIntDriverInput> = (props: TimeIntDriverInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Scale,
    Repeat,
    PingPong,
    Target,
  } = props;

  return (
    <component
      name="FrooxEngine.TimeIntDriver"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Scale"
        content={Scale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Repeat"
        content={Repeat} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PingPong"
        content={PingPong} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Int32]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
    </component>
  );
};

export default TimeIntDriver;
