import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface NullTextureProviderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
}

const NullTextureProvider: FC<NullTextureProviderInput> = (
  props: NullTextureProviderInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled } = props;

  return (
    <component
      name="FrooxEngine.NullTextureProvider"
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
    </component>
  );
};

export default NullTextureProvider;
