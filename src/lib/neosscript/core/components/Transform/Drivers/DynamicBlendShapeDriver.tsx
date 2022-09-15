import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicBlendShapeDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Renderer?: member<any>;
  BlendShapes?: member<any>;
  _lastRenderer?: member<any>;
}

const DynamicBlendShapeDriver: FC<DynamicBlendShapeDriverInput> = (
  props: DynamicBlendShapeDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Renderer,
    BlendShapes,
    _lastRenderer,
  } = props;

  return (
    <component
      name="FrooxEngine.DynamicBlendShapeDriver"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.SkinnedMeshRenderer]`}
        name="Renderer"
        content={Renderer} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.DynamicBlendShapeDriver+BlendShape]`}
        name="BlendShapes"
        content={
          BlendShapes
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.DynamicBlendShapeDriver+BlendShape] */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.SkinnedMeshRenderer]`}
        name="_lastRenderer"
        content={_lastRenderer} /* default: ID0 */
      />
    </component>
  );
};

export default DynamicBlendShapeDriver;
