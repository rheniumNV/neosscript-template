import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueRadio_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  CheckVisual?: member<any>;
  OptionValue?: member<any>;
  TargetValue?: member<any>;
}

const ValueRadio_T: FC<ValueRadio_TInput> = (props: ValueRadio_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    CheckVisual,
    OptionValue,
    TargetValue,
  } = props;

  return (
    <component
      name={`FrooxEngine.UIX.ValueRadio\`1[${[T]}]`}
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
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="CheckVisual"
        content={CheckVisual} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="OptionValue"
        content={OptionValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`}
        name="TargetValue"
        content={TargetValue} /* default: null */
      />
    </component>
  );
};

export default ValueRadio_T;
