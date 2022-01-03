import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  ViewportIndex?: member<number>;
  AnimationTime?: member<number>;
  Direction?: member<any>;
}

const AxisMultiViewportPanner: FC<AxisMultiViewportPannerInput> = (
  props: AxisMultiViewportPannerInput
) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    ViewportIndex,
    AnimationTime,
    Direction,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.AxisMultiViewportPanner"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="ViewportIndex"
        content={ViewportIndex} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="AnimationTime"
        content={AnimationTime} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.AxisMultiViewportPanner+AlignDirection]"
        name="Direction"
        content={Direction} /* default: LeftToRight */
      />
    </component>
  );
};

export default AxisMultiViewportPanner;
