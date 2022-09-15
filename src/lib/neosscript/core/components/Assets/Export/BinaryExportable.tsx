import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BinaryExportableInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Binary?: member<any>;
}

const BinaryExportable: FC<BinaryExportableInput> = (
  props: BinaryExportableInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Binary } =
    props;

  return (
    <component
      name="FrooxEngine.BinaryExportable"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Binary]`}
        name="Binary"
        content={Binary} /* default: ID0 */
      />
    </component>
  );
};

export default BinaryExportable;
