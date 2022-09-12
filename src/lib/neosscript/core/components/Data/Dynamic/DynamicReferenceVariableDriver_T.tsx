import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicReferenceVariableDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  VariableName?: member<any>;
  Target?: member<any>;
  DefaultTarget?: member<any>;
}

const DynamicReferenceVariableDriver_T: FC<
  DynamicReferenceVariableDriver_TInput
> = (props: DynamicReferenceVariableDriver_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    VariableName,
    Target,
    DefaultTarget,
  } = props;

  return (
    <component
      name={`FrooxEngine.DynamicReferenceVariableDriver\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="VariableName"
        content={VariableName} /* default: null */
      />
      <Member
        type={`FrooxEngine.RefDrive\`1[${T}]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[${T}]`}
        name="DefaultTarget"
        content={DefaultTarget} /* default: null */
      />
    </component>
  );
};

export default DynamicReferenceVariableDriver_T;
