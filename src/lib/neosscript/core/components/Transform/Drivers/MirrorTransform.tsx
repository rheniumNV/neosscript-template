import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MirrorTransformInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  MirrorSource?: member<any>;
  MirrorPlane?: member<any>;
  MirrorOffset?: member<[number, number, number]>;
  MirrorNormal?: member<[number, number, number]>;
  AllowWriteBack?: member<boolean>;
  _position?: member<any>;
  _rotation?: member<any>;
}

const MirrorTransform: FC<MirrorTransformInput> = (
  props: MirrorTransformInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    MirrorSource,
    MirrorPlane,
    MirrorOffset,
    MirrorNormal,
    AllowWriteBack,
    _position,
    _rotation,
  } = props;

  return (
    <component
      name="FrooxEngine.MirrorTransform"
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
        name="MirrorSource"
        content={MirrorSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="MirrorPlane"
        content={MirrorPlane} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="MirrorOffset"
        content={MirrorOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="MirrorNormal"
        content={MirrorNormal} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowWriteBack"
        content={AllowWriteBack} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_position"
        content={_position} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotation"
        content={_rotation} /* default: ID0 */
      />
    </component>
  );
};

export default MirrorTransform;
