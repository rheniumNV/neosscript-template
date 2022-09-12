import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RemoteConnectionPointDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  FilterThreshold?: member<number>;
  TargetPoint?: member<any>;
  TargetVector?: member<[number, number, number]>;
  TargetSize?: member<number>;
  TargetOrientation?: member<any>;
  LocalPoint?: member<any>;
  LocalVector?: member<any>;
  LocalOrientation?: member<any>;
  LocalSize?: member<any>;
}

const RemoteConnectionPointDriver: FC<RemoteConnectionPointDriverInput> = (
  props: RemoteConnectionPointDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    FilterThreshold,
    TargetPoint,
    TargetVector,
    TargetSize,
    TargetOrientation,
    LocalPoint,
    LocalVector,
    LocalOrientation,
    LocalSize,
  } = props;

  return (
    <component
      name="FrooxEngine.RemoteConnectionPointDriver"
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
        name="FilterThreshold"
        content={FilterThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.TransformRelayRef`}
        name="TargetPoint"
        content={TargetPoint} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TargetVector"
        content={TargetVector} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TargetSize"
        content={TargetSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="TargetOrientation"
        content={TargetOrientation} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="LocalPoint"
        content={LocalPoint} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="LocalVector"
        content={LocalVector} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="LocalOrientation"
        content={LocalOrientation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="LocalSize"
        content={LocalSize} /* default: ID0 */
      />
    </component>
  );
};

export default RemoteConnectionPointDriver;
