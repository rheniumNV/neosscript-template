import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ObjectScrollerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Items?: member<any>;
  Offset?: member<[number, number, number]>;
  RegionSize?: member<[number, number, number]>;
}

const ObjectScroller: FC<ObjectScrollerInput> = (
  props: ObjectScrollerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Items,
    Offset,
    RegionSize,
  } = props;

  return (
    <component
      name="FrooxEngine.ObjectScroller"
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
        type={`FrooxEngine.SyncList\`1[FrooxEngine.ObjectScroller+Item]`}
        name="Items"
        content={
          Items
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.ObjectScroller+Item] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Offset"
        content={Offset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="RegionSize"
        content={RegionSize} /* default: [0; 0; 0] */
      />
    </component>
  );
};

export default ObjectScroller;
