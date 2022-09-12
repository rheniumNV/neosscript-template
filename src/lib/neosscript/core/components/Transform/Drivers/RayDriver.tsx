import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RayDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  MaxDistance?: member<number>;
  PointA?: member<any>;
  PointB?: member<any>;
  LocalOrigin?: member<[number, number, number]>;
  LocalDirection?: member<[number, number, number]>;
}

const RayDriver: FC<RayDriverInput> = (props: RayDriverInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    MaxDistance,
    PointA,
    PointB,
    LocalOrigin,
    LocalDirection,
  } = props;

  return (
    <component
      name="FrooxEngine.RayDriver"
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
        name="MaxDistance"
        content={MaxDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`}
        name="PointA"
        content={PointA} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`}
        name="PointB"
        content={PointB} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="LocalOrigin"
        content={LocalOrigin} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="LocalDirection"
        content={LocalDirection} /* default: [0; 0; 0] */
      />
    </component>
  );
};

export default RayDriver;
