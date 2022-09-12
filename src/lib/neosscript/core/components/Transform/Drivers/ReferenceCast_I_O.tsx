import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReferenceCast_I_OInput {
  type: { I: { name: string }; O: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  Target?: member<any>;
  WriteBack?: member<boolean>;
}

const ReferenceCast_I_O: FC<ReferenceCast_I_OInput> = (
  props: ReferenceCast_I_OInput
) => {
  const {
    type: {
      I: { name: I },
      O: { name: O },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Source,
    Target,
    WriteBack,
  } = props;

  return (
    <component
      name={`FrooxEngine.ReferenceCast\`2[${[I, O]}]`}
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
        type={`FrooxEngine.SyncRef\`1[I]`}
        name="Source"
        content={Source} /* default: False */
      />
      <Member
        type={`FrooxEngine.RefDrive\`1[O]`}
        name="Target"
        content={Target} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WriteBack"
        content={WriteBack} /* default: False */
      />
    </component>
  );
};

export default ReferenceCast_I_O;
