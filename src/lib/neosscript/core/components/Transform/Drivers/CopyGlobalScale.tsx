import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CopyGlobalScaleInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  NonUniform?: member<boolean>;
  _scaleDrive?: member<any>;
}

const CopyGlobalScale: FC<CopyGlobalScaleInput> = (
  props: CopyGlobalScaleInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Source,
    NonUniform,
    _scaleDrive,
  } = props;

  return (
    <component
      name="FrooxEngine.CopyGlobalScale"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="NonUniform"
        content={NonUniform} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_scaleDrive"
        content={_scaleDrive} /* default: ID0 */
      />
    </component>
  );
};

export default CopyGlobalScale;
