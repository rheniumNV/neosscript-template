import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CircleAlignerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AutoAddChildren?: member<boolean>;
  Axis?: member<[number, number, number]>;
  Radius?: member<number>;
  Offset?: member<number>;
  Arc?: member<number>;
  FillWholeArc?: member<boolean>;
  RotationOffset?: member<number>;
  Items?: member<any>;
}

const CircleAligner: FC<CircleAlignerInput> = (props: CircleAlignerInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    AutoAddChildren,
    Axis,
    Radius,
    Offset,
    Arc,
    FillWholeArc,
    RotationOffset,
    Items,
  } = props;

  return (
    <component
      name="FrooxEngine.CircleAligner"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoAddChildren"
        content={AutoAddChildren} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Axis"
        content={Axis} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Radius"
        content={Radius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Offset"
        content={Offset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Arc"
        content={Arc} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="FillWholeArc"
        content={FillWholeArc} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RotationOffset"
        content={RotationOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.CircleAligner+Item]`}
        name="Items"
        content={
          Items
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.CircleAligner+Item] */
      />
    </component>
  );
};

export default CircleAligner;
