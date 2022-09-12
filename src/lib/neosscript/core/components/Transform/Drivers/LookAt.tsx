import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LookAtInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  TargetPoint?: member<[number, number, number]>;
  TargetPointSpace?: member<any>;
  Up?: member<[number, number, number]>;
  RotationOffset?: member<any>;
  SwingReference?: member<[number, number, number]>;
  TwistReference?: member<[number, number, number]>;
  MaxSwing?: member<number>;
  MaxTwist?: member<number>;
  _target?: member<any>;
}

const LookAt: FC<LookAtInput> = (props: LookAtInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    TargetPoint,
    TargetPointSpace,
    Up,
    RotationOffset,
    SwingReference,
    TwistReference,
    MaxSwing,
    MaxTwist,
    _target,
  } = props;

  return (
    <component
      name="FrooxEngine.LookAt"
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
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetPoint"
        content={TargetPoint} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.RootSpace`}
        name="TargetPointSpace"
        content={
          TargetPointSpace
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Up"
        content={Up} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="RotationOffset"
        content={RotationOffset} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="SwingReference"
        content={SwingReference} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TwistReference"
        content={TwistReference} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxSwing"
        content={MaxSwing} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxTwist"
        content={MaxTwist} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_target"
        content={_target} /* default: ID0 */
      />
    </component>
  );
};

export default LookAt;
