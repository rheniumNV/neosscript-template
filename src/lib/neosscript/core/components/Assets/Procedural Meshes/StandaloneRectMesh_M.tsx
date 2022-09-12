import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StandaloneRectMesh_MInput {
  type: { M: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Rect?: member<any>;
  Mesh?: member<any>;
}

const StandaloneRectMesh_M: FC<StandaloneRectMesh_MInput> = (
  props: StandaloneRectMesh_MInput
) => {
  const {
    type: {
      M: { name: M },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Rect,
    Mesh,
  } = props;

  return (
    <component
      name={`FrooxEngine.StandaloneRectMesh\`1[${[M]}]`}
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
        content={HighPriorityIntegration} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OverrideBoundingBox"
        content={OverrideBoundingBox} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`}
        name="OverridenBoundingBox"
        content={OverridenBoundingBox} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.Rect]`}
        name="Rect"
        content={Rect} /* default: null */
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

export default StandaloneRectMesh_M;
