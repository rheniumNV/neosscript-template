import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BakeMeshesInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Root?: member<any>;
  SkinnedMeshMode?: member<any>;
  IncludeInactive?: member<any>;
  Undoable?: member<any>;
  DestroyOriginal?: member<any>;
  GrabbableHandling?: member<any>;
  ColliderHandling?: member<any>;
  OnBaked?: member<any>;
}

const BakeMeshes: FC<BakeMeshesInput> = (props: BakeMeshesInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Root,
    SkinnedMeshMode,
    IncludeInactive,
    Undoable,
    DestroyOriginal,
    GrabbableHandling,
    ColliderHandling,
    OnBaked,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Assets.BakeMeshes"
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
        type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`}
        name="_activeVisual"
        content={_activeVisual} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`}
        name="Root"
        content={Root} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`}
        name="SkinnedMeshMode"
        content={SkinnedMeshMode} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`}
        name="IncludeInactive"
        content={IncludeInactive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`}
        name="Undoable"
        content={Undoable} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`}
        name="DestroyOriginal"
        content={DestroyOriginal} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.ComponentHandling]`}
        name="GrabbableHandling"
        content={GrabbableHandling} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.ComponentHandling]`}
        name="ColliderHandling"
        content={ColliderHandling} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Impulse`}
        name="OnBaked"
        content={OnBaked} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default BakeMeshes;
