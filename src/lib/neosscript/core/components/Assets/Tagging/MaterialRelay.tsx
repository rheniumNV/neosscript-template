import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MaterialRelayInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  MaterialRefs?: member<any>;
}

const MaterialRelay: FC<MaterialRelayInput> = (props: MaterialRelayInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    MaterialRefs,
  } = props;

  return (
    <component
      name="FrooxEngine.MaterialRelay"
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
        type={`FrooxEngine.SyncRefList\`1[FrooxEngine.AssetRef\`1[FrooxEngine.Material]]`}
        name="MaterialRefs"
        content={
          MaterialRefs
        } /* default: FrooxEngine.SyncRefList`1[FrooxEngine.AssetRef`1[FrooxEngine.Material]] */
      />
    </component>
  );
};

export default MaterialRelay;
