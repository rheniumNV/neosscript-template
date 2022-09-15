import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ProjectedRectSlotDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _position?: member<any>;
  Target?: member<any>;
  _rotation?: member<any>;
  _scale?: member<any>;
  _originalParent?: member<any>;
  _lastTarget?: member<any>;
}

const ProjectedRectSlotDriver: FC<ProjectedRectSlotDriverInput> = (
  props: ProjectedRectSlotDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _position,
    Target,
    _rotation,
    _scale,
    _originalParent,
    _lastTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ProjectedRectSlotDriver"
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
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_position"
        content={_position} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotation"
        content={_rotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_scale"
        content={_scale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="_originalParent"
        content={_originalParent} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="_lastTarget"
        content={_lastTarget} /* default: ID0 */
      />
    </component>
  );
};

export default ProjectedRectSlotDriver;
