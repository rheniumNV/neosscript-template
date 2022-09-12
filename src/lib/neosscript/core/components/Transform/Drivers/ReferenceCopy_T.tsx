import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReferenceCopy_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  Target?: member<any>;
  WriteBack?: member<boolean>;
}

const ReferenceCopy_T: FC<ReferenceCopy_TInput> = (
  props: ReferenceCopy_TInput
) => {
  const {
    type: {
      T: { name: T },
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
      name={`FrooxEngine.ReferenceCopy\`1[${[T]}]`}
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`}
        name="Source"
        content={Source} /* default: null */
      />
      <Member
        type={`FrooxEngine.RefDrive\`1[${T}]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WriteBack"
        content={WriteBack} /* default: null */
      />
    </component>
  );
};

export default ReferenceCopy_T;
