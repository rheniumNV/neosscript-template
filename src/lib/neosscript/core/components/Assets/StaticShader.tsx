import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticShaderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
}

const StaticShader: FC<StaticShaderInput> = (props: StaticShaderInput) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, URL } = props;

  return (
    <component
      name="FrooxEngine.StaticShader"
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
    </component>
  );
};

export default StaticShader;
