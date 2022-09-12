import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicSubtitleProviderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  AssetURL?: member<any>;
}

const DynamicSubtitleProvider: FC<DynamicSubtitleProviderInput> = (
  props: DynamicSubtitleProviderInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    AssetURL,
  } = props;

  return (
    <component
      name="FrooxEngine.DynamicSubtitleProvider"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HighPriorityIntegration"
        content={HighPriorityIntegration} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Uri]`}
        name="AssetURL"
        content={AssetURL} /* default: <i>null</i> */
      />
    </component>
  );
};

export default DynamicSubtitleProvider;
