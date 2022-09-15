import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AxisRotationAlignerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  LocalDirection?: member<[number, number, number]>;
  TargetDirection?: member<[number, number, number]>;
  DirectionSpace?: member<any>;
  LocalRotation?: member<any>;
  _rotation?: member<any>;
}

const AxisRotationAligner: FC<AxisRotationAlignerInput> = (
  props: AxisRotationAlignerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    LocalDirection,
    TargetDirection,
    DirectionSpace,
    LocalRotation,
    _rotation,
  } = props;

  return (
    <component
      name="FrooxEngine.AxisRotationAligner"
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
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="LocalDirection"
        content={LocalDirection} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetDirection"
        content={TargetDirection} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.RootSpace`}
        name="DirectionSpace"
        content={
          DirectionSpace
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="LocalRotation"
        content={LocalRotation} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotation"
        content={_rotation} /* default: ID0 */
      />
    </component>
  );
};

export default AxisRotationAligner;
