import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RandomEventGeneratorInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  MinInterval?: member<number>;
  MaxInterval?: member<number>;
  RandomPointGenerator?: member<any>;
  Events?: member<any>;
  PointEvents?: member<any>;
}

const RandomEventGenerator: FC<RandomEventGeneratorInput> = (
  props: RandomEventGeneratorInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    MinInterval,
    MaxInterval,
    RandomPointGenerator,
    Events,
    PointEvents,
  } = props;

  return (
    <component
      name="FrooxEngine.RandomEventGenerator"
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
        name="MinInterval"
        content={MinInterval} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxInterval"
        content={MaxInterval} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPointGenerator]`}
        name="RandomPointGenerator"
        content={RandomPointGenerator} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.SyncDelegate\`1[System.Action]]`}
        name="Events"
        content={
          Events
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.SyncDelegate`1[System.Action]] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.SyncDelegate\`1[System.Action\`1[BaseX.float3]]]`}
        name="PointEvents"
        content={
          PointEvents
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.SyncDelegate`1[System.Action`1[BaseX.float3]]] */
      />
    </component>
  );
};

export default RandomEventGenerator;
