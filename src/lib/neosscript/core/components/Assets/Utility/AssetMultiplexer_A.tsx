import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AssetMultiplexer_AInput {
  type: { A: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  Index?: member<number>;
}

const AssetMultiplexer_A: FC<AssetMultiplexer_AInput> = (
  props: AssetMultiplexer_AInput
) => {
  const {
    type: {
      A: { name: A },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    Index,
  } = props;

  return (
    <component
      name={`FrooxEngine.AssetMultiplexer\`1[${[A]}]`}
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
        type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[A]]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Index"
        content={Index} /* default: null */
      />
    </component>
  );
};

export default AssetMultiplexer_A;
