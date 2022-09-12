import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VirtualParentInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  OverrideParent?: member<any>;
  _targetPos?: member<any>;
  _targetRot?: member<any>;
  _targetScl?: member<any>;
  LocalPosition?: member<[number, number, number]>;
  LocalRotation?: member<any>;
  LocalScale?: member<[number, number, number]>;
}

const VirtualParent: FC<VirtualParentInput> = (props: VirtualParentInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    OverrideParent,
    _targetPos,
    _targetRot,
    _targetScl,
    LocalPosition,
    LocalRotation,
    LocalScale,
  } = props;

  return (
    <component
      name="FrooxEngine.VirtualParent"
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
        name="OverrideParent"
        content={OverrideParent} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_targetPos"
        content={_targetPos} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_targetRot"
        content={_targetRot} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_targetScl"
        content={_targetScl} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="LocalPosition"
        content={LocalPosition} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="LocalRotation"
        content={LocalRotation} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="LocalScale"
        content={LocalScale} /* default: [0; 0; 0] */
      />
    </component>
  );
};

export default VirtualParent;
