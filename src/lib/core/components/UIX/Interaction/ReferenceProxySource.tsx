import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ReferenceProxySourceInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Reference?: member<any>;
}

const ReferenceProxySource: FC<ReferenceProxySourceInput> = (
  props: ReferenceProxySourceInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, Reference } = props;

  return (
    <component
      name="FrooxEngine.ReferenceProxySource"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member type="FrooxEngine.SyncRef" name="Reference" content={Reference} />
    </component>
  );
};

export default ReferenceProxySource;
