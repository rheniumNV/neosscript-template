import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface QuantityTextFormatDriver_UInput {
  type: { U: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<string>;
  BaseValue?: member<number>;
  FormatUnit?: member<any>;
  FormatNumber?: member<any>;
  CompoundUseLongNames?: member<boolean>;
  CompoundOverrideNames?: member<boolean>;
  CompoundDiscardLastFraction?: member<boolean>;
  CompoundSeparator?: member<any>;
  CompoundZeroHandling?: member<any>;
}

const QuantityTextFormatDriver_U: FC<QuantityTextFormatDriver_UInput> = (
  props: QuantityTextFormatDriver_UInput
) => {
  const {
    type: {
      U: { name: U },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    BaseValue,
    FormatUnit,
    FormatNumber,
    CompoundUseLongNames,
    CompoundOverrideNames,
    CompoundDiscardLastFraction,
    CompoundSeparator,
    CompoundZeroHandling,
  } = props;

  return (
    <component
      name={`FrooxEngine.QuantityTextFormatDriver\`1[${[U]}]`}
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
        type={`FrooxEngine.FieldDrive\`1[System.String]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Double]`}
        name="BaseValue"
        content={BaseValue} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="FormatUnit"
        content={FormatUnit} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="FormatNumber"
        content={FormatNumber} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CompoundUseLongNames"
        content={CompoundUseLongNames} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CompoundOverrideNames"
        content={CompoundOverrideNames} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CompoundDiscardLastFraction"
        content={CompoundDiscardLastFraction} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="CompoundSeparator"
        content={CompoundSeparator} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[QuantityX.CompoundZeroHandling]`}
        name="CompoundZeroHandling"
        content={CompoundZeroHandling} /* default: null */
      />
    </component>
  );
};

export default QuantityTextFormatDriver_U;
