import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TipJarInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  RecipientId?: member<any>;
  Token?: member<any>;
}

const TipJar: FC<TipJarInput> = (props: TipJarInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    RecipientId,
    Token,
  } = props;

  return (
    <component
      name="FrooxEngine.TipJar"
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
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="RecipientId"
        content={RecipientId} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Token"
        content={Token} /* default: <i>null</i> */
      />
    </component>
  );
};

export default TipJar;
