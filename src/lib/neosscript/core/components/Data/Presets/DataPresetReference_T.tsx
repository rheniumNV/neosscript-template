import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DataPresetReference_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  PresetReference?: member<any>;
  TargetReference?: member<any>;
}

const DataPresetReference_T: FC<DataPresetReference_TInput> = (
  props: DataPresetReference_TInput
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
    PresetReference,
    TargetReference,
  } = props;

  return (
    <component
      name={`FrooxEngine.DataPresetReference\`1[${[T]}]`}
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
        type={`FrooxEngine.SyncRef\`1[${T}]`}
        name="PresetReference"
        content={PresetReference} /* default: null */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`}
        name="TargetReference"
        content={TargetReference} /* default: null */
      />
    </component>
  );
};

export default DataPresetReference_T;
