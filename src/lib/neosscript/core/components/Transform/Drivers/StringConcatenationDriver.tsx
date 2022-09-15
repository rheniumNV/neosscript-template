import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StringConcatenationDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetString?: member<string>;
  Separator?: member<any>;
  Strings?: member<any>;
  NullOutputWhenAllAreNull?: member<boolean>;
}

const StringConcatenationDriver: FC<StringConcatenationDriverInput> = (
  props: StringConcatenationDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetString,
    Separator,
    Strings,
    NullOutputWhenAllAreNull,
  } = props;

  return (
    <component
      name="FrooxEngine.StringConcatenationDriver"
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
        name="TargetString"
        content={TargetString} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Separator"
        content={Separator} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.SyncFieldList\`1[System.String]`}
        name="Strings"
        content={
          Strings
        } /* default: FrooxEngine.SyncFieldList`1[System.String] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="NullOutputWhenAllAreNull"
        content={NullOutputWhenAllAreNull} /* default: False */
      />
    </component>
  );
};

export default StringConcatenationDriver;
