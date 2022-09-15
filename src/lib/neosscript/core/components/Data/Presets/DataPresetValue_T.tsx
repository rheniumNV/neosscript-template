import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DataPresetValue_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  PresetValue?: member<any>;
  TargetField?: member<any>;
}

const DataPresetValue_T: FC<DataPresetValue_TInput> = (
  props: DataPresetValue_TInput
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
    PresetValue,
    TargetField,
  } = props;

  return (
    <component
      name={`FrooxEngine.DataPresetValue\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="PresetValue"
        content={PresetValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`}
        name="TargetField"
        content={TargetField} /* default: null */
      />
    </component>
  );
};

export default DataPresetValue_T;
