import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ExternalSlotDuplicatorInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetSlot?: member<any>;
  LocalPositionOverride?: member<any>;
  LocalRotationOverride?: member<any>;
  LocalScaleOverride?: member<any>;
  ActiveSelfOverride?: member<any>;
  DoNotRestoreOriginalTransform?: member<boolean>;
}

const ExternalSlotDuplicator: FC<ExternalSlotDuplicatorInput> = (
  props: ExternalSlotDuplicatorInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetSlot,
    LocalPositionOverride,
    LocalRotationOverride,
    LocalScaleOverride,
    ActiveSelfOverride,
    DoNotRestoreOriginalTransform,
  } = props;

  return (
    <component
      name="FrooxEngine.ExternalSlotDuplicator"
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
        name="TargetSlot"
        content={TargetSlot} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`}
        name="LocalPositionOverride"
        content={LocalPositionOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.floatQ]]`}
        name="LocalRotationOverride"
        content={LocalRotationOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`}
        name="LocalScaleOverride"
        content={LocalScaleOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`}
        name="ActiveSelfOverride"
        content={ActiveSelfOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DoNotRestoreOriginalTransform"
        content={DoNotRestoreOriginalTransform} /* default: False */
      />
    </component>
  );
};

export default ExternalSlotDuplicator;
