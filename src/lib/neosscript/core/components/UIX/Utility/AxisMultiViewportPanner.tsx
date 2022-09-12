import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AxisMultiViewportPannerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ViewportIndex?: member<number>;
  AnimationTime?: member<number>;
  Direction?: member<any>;
  Viewports?: member<any>;
}

const AxisMultiViewportPanner: FC<AxisMultiViewportPannerInput> = (
  props: AxisMultiViewportPannerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ViewportIndex,
    AnimationTime,
    Direction,
    Viewports,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.AxisMultiViewportPanner"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="ViewportIndex"
        content={ViewportIndex} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AnimationTime"
        content={AnimationTime} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.AxisMultiViewportPanner+AlignDirection]`}
        name="Direction"
        content={Direction} /* default: LeftToRight */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.UIX.AxisMultiViewportPanner+Viewport]`}
        name="Viewports"
        content={
          Viewports
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.UIX.AxisMultiViewportPanner+Viewport] */
      />
    </component>
  );
};

export default AxisMultiViewportPanner;
