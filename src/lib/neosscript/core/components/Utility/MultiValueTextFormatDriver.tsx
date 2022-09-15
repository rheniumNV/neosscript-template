import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MultiValueTextFormatDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Sources?: member<any>;
  Format?: member<any>;
  Text?: member<string>;
}

const MultiValueTextFormatDriver: FC<MultiValueTextFormatDriverInput> = (
  props: MultiValueTextFormatDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Sources,
    Format,
    Text,
  } = props;

  return (
    <component
      name="FrooxEngine.MultiValueTextFormatDriver"
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
        type={`FrooxEngine.SyncRelayList\`1[FrooxEngine.IField]`}
        name="Sources"
        content={
          Sources
        } /* default: FrooxEngine.SyncRelayList`1[FrooxEngine.IField] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Format"
        content={Format} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.String]`}
        name="Text"
        content={Text} /* default: ID0 */
      />
    </component>
  );
};

export default MultiValueTextFormatDriver;
