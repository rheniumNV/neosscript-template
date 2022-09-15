import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TokensSupportedDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
}

const TokensSupportedDriver: FC<TokensSupportedDriverInput> = (
  props: TokensSupportedDriverInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, Target } =
    props;

  return (
    <component
      name="FrooxEngine.TokensSupportedDriver"
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
        name="Target"
        content={Target} /* default: ID0 */
      />
    </component>
  );
};

export default TokensSupportedDriver;
