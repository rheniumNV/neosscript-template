import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PositionDeltaDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Origin?: member<any>;
  Target?: member<any>;
  VectorSpace?: member<any>;
  Normalized?: member<boolean>;
  Vector?: member<any>;
}

const PositionDeltaDriver: FC<PositionDeltaDriverInput> = (
  props: PositionDeltaDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Origin,
    Target,
    VectorSpace,
    Normalized,
    Vector,
  } = props;

  return (
    <component
      name="FrooxEngine.PositionDeltaDriver"
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
        type={`FrooxEngine.TransformRelayRef`}
        name="Origin"
        content={Origin} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.TransformRelayRef`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RootSpace`}
        name="VectorSpace"
        content={
          VectorSpace
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Normalized"
        content={Normalized} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="Vector"
        content={Vector} /* default: ID0 */
      />
    </component>
  );
};

export default PositionDeltaDriver;
