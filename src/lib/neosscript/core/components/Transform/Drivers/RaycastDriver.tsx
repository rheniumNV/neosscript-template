import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RaycastDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  IgnoreHierarchy?: member<any>;
  FilterDistance?: member<number>;
  Origin?: member<any>;
  Offset?: member<[number, number, number]>;
  Direction?: member<[number, number, number]>;
  MaxDistance?: member<number>;
  NoHitDistance?: member<number>;
  Filter?: member<any>;
  _positionDrive?: member<any>;
  _rotationDrive?: member<any>;
}

const RaycastDriver: FC<RaycastDriverInput> = (props: RaycastDriverInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    IgnoreHierarchy,
    FilterDistance,
    Origin,
    Offset,
    Direction,
    MaxDistance,
    NoHitDistance,
    Filter,
    _positionDrive,
    _rotationDrive,
  } = props;

  return (
    <component
      name="FrooxEngine.RaycastDriver"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="IgnoreHierarchy"
        content={IgnoreHierarchy} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FilterDistance"
        content={FilterDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="Origin"
        content={Origin} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Offset"
        content={Offset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Direction"
        content={Direction} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxDistance"
        content={MaxDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NoHitDistance"
        content={NoHitDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Func\`2[FrooxEngine.ICollider,System.Boolean]]`}
        name="Filter"
        content={Filter} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_positionDrive"
        content={_positionDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotationDrive"
        content={_rotationDrive} /* default: ID0 */
      />
    </component>
  );
};

export default RaycastDriver;
