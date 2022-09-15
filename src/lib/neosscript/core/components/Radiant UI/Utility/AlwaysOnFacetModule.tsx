import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AlwaysOnFacetModuleInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _targets?: member<any>;
}

const AlwaysOnFacetModule: FC<AlwaysOnFacetModuleInput> = (
  props: AlwaysOnFacetModuleInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, _targets } =
    props;

  return (
    <component
      name="FrooxEngine.AlwaysOnFacetModule"
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
        type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`}
        name="_targets"
        content={
          _targets
        } /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */
      />
    </component>
  );
};

export default AlwaysOnFacetModule;
