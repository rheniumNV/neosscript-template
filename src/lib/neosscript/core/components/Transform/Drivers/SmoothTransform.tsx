import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SmoothTransformInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  InterpolationSpace?: member<any>;
  TargetPosition?: member<[number, number, number]>;
  TargetRotation?: member<any>;
  TargetScale?: member<[number, number, number]>;
  Position?: member<any>;
  Rotation?: member<any>;
  Scale?: member<any>;
  SmoothSpeed?: member<number>;
  _updateIndex?: member<number>;
}

const SmoothTransform: FC<SmoothTransformInput> = (
  props: SmoothTransformInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    InterpolationSpace,
    TargetPosition,
    TargetRotation,
    TargetScale,
    Position,
    Rotation,
    Scale,
    SmoothSpeed,
    _updateIndex,
  } = props;

  return (
    <component
      name="FrooxEngine.SmoothTransform"
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
        type={`FrooxEngine.RootSpace`}
        name="InterpolationSpace"
        content={
          InterpolationSpace
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetPosition"
        content={TargetPosition} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="TargetRotation"
        content={TargetRotation} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetScale"
        content={TargetScale} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="Position"
        content={Position} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="Rotation"
        content={Rotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="Scale"
        content={Scale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SmoothSpeed"
        content={SmoothSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="_updateIndex"
        content={_updateIndex} /* default: 0 */
      />
    </component>
  );
};

export default SmoothTransform;
