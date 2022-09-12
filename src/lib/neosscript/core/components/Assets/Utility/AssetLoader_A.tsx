import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AssetLoader_AInput {
  type: { A: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Asset?: member<any>;
}

const AssetLoader_A: FC<AssetLoader_AInput> = (props: AssetLoader_AInput) => {
  const {
    type: {
      A: { name: A },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Asset,
  } = props;

  return (
    <component
      name={`FrooxEngine.AssetLoader\`1[${[A]}]`}
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
        type={`FrooxEngine.AssetRef\`1[A]`}
        name="Asset"
        content={Asset} /* default: null */
      />
    </component>
  );
};

export default AssetLoader_A;
