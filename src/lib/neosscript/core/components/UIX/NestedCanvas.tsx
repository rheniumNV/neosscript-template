import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface NestedCanvasInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TargetCanvas?: member<any>;
  _renderOffset?: member<any>;
  _maskDepth?: member<any>;
}

const NestedCanvas: FC<NestedCanvasInput> = (props: NestedCanvasInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TargetCanvas,
    _renderOffset,
    _maskDepth,
  } = props;

  return (
    <component
      name="FrooxEngine.NestedCanvas"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`}
        name="TargetCanvas"
        content={TargetCanvas} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Int32]`}
        name="_renderOffset"
        content={_renderOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Int32]`}
        name="_maskDepth"
        content={_maskDepth} /* default: ID0 */
      />
    </component>
  );
};

export default NestedCanvas;
