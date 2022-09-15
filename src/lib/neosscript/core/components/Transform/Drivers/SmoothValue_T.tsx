import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SmoothValue_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetValue?: member<any>;
  Speed?: member<number>;
  WriteBack?: member<boolean>;
  Value?: member<any>;
}

const SmoothValue_T: FC<SmoothValue_TInput> = (props: SmoothValue_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetValue,
    Speed,
    WriteBack,
    Value,
  } = props;

  return (
    <component
      name={`FrooxEngine.SmoothValue\`1[${[T]}]`}
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
        name="TargetValue"
        content={TargetValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Speed"
        content={Speed} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WriteBack"
        content={WriteBack} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[${T}]`}
        name="Value"
        content={Value} /* default: null */
      />
    </component>
  );
};

export default SmoothValue_T;
