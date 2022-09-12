import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
  Readable?: member<boolean>;
}

const StaticMesh: FC<StaticMeshInput> = (props: StaticMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    URL,
    Readable,
  } = props;

  return (
    <component
      name="FrooxEngine.StaticMesh"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Readable"
        content={Readable} /* default: False */
      />
    </component>
  );
};

export default StaticMesh;
