import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ProjectedRectSlotDriverInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
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
    UpdateOrder,
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
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float3]"
        name="_position"
        content={_position}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.Slot]"
        name="Target"
        content={Target}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.floatQ]"
        name="_rotation"
        content={_rotation}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float3]"
        name="_scale"
        content={_scale}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.Slot]"
        name="_originalParent"
        content={_originalParent}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.Slot]"
        name="_lastTarget"
        content={_lastTarget}
      />
    </component>
  );
};

export default ProjectedRectSlotDriver;
