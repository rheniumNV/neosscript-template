import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CopyGlobalTransformInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  _posDrive?: member<any>;
  _rotDrive?: member<any>;
}

const CopyGlobalTransform: FC<CopyGlobalTransformInput> = (
  props: CopyGlobalTransformInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Source,
    _posDrive,
    _rotDrive,
  } = props;

  return (
    <component
      name="FrooxEngine.CopyGlobalTransform"
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
        name="Source"
        content={Source} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_posDrive"
        content={_posDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotDrive"
        content={_rotDrive} /* default: ID0 */
      />
    </component>
  );
};

export default CopyGlobalTransform;
