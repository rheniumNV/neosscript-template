import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticLocaleProviderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
  OverrideLocale?: member<any>;
}

const StaticLocaleProvider: FC<StaticLocaleProviderInput> = (
  props: StaticLocaleProviderInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    URL,
    OverrideLocale,
  } = props;

  return (
    <component
      name="FrooxEngine.StaticLocaleProvider"
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
        type={`FrooxEngine.Sync\`1[System.Uri]`}
        name="URL"
        content={URL} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="OverrideLocale"
        content={OverrideLocale} /* default: <i>null</i> */
      />
    </component>
  );
};

export default StaticLocaleProvider;
