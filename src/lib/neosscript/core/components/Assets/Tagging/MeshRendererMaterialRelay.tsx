import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MeshRendererMaterialRelayInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Renderers?: member<any>;
  _renderer?: member<any>;
}

const MeshRendererMaterialRelay: FC<MeshRendererMaterialRelayInput> = (
  props: MeshRendererMaterialRelayInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Renderers,
    _renderer,
  } = props;

  return (
    <component
      name="FrooxEngine.MeshRendererMaterialRelay"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
      version={1}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncRefList\`1[FrooxEngine.MeshRenderer]`}
        name="Renderers"
        content={
          Renderers
        } /* default: FrooxEngine.SyncRefList`1[FrooxEngine.MeshRenderer] */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`}
        name="_renderer"
        content={_renderer} /* default: ID0 */
      />
    </component>
  );
};

export default MeshRendererMaterialRelay;
