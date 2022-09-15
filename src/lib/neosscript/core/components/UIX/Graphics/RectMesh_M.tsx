import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RectMesh_MInput {
  type: { M: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Mesh?: member<any>;
}

const RectMesh_M: FC<RectMesh_MInput> = (props: RectMesh_MInput) => {
  const {
    type: {
      M: { name: M },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Mesh,
  } = props;

  return (
    <component
      name={`FrooxEngine.UIX.RectMesh\`1[${[M]}]`}
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
        type={`FrooxEngine.AudioSourceWaveformMesh`}
        name="Mesh"
        content={
          Mesh
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.AudioSourceWaveformMesh,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
    </component>
  );
};

export default RectMesh_M;
