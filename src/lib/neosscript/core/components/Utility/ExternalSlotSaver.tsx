import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ExternalSlotSaverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetSlot?: member<any>;
  SaveActiveSelfOverride?: member<any>;
  SaveLocalPositionOverride?: member<any>;
  SaveLocalRotationOverride?: member<any>;
  SaveLocalScaleOverride?: member<any>;
  IgnoreWhenNonPersistentSelf?: member<boolean>;
}

const ExternalSlotSaver: FC<ExternalSlotSaverInput> = (
  props: ExternalSlotSaverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetSlot,
    SaveActiveSelfOverride,
    SaveLocalPositionOverride,
    SaveLocalRotationOverride,
    SaveLocalScaleOverride,
    IgnoreWhenNonPersistentSelf,
  } = props;

  return (
    <component
      name="FrooxEngine.ExternalSlotSaver"
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
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`}
        name="SaveActiveSelfOverride"
        content={SaveActiveSelfOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`}
        name="SaveLocalPositionOverride"
        content={SaveLocalPositionOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.floatQ]]`}
        name="SaveLocalRotationOverride"
        content={SaveLocalRotationOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`}
        name="SaveLocalScaleOverride"
        content={SaveLocalScaleOverride} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IgnoreWhenNonPersistentSelf"
        content={IgnoreWhenNonPersistentSelf} /* default: False */
      />
    </component>
  );
};

export default ExternalSlotSaver;
