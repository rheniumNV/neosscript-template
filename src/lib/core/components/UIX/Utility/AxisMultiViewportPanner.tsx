import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface AxisMultiViewportPannerInput {
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
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="ViewportIndex"
        content={ViewportIndex}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="AnimationTime"
        content={AnimationTime}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.AxisMultiViewportPanner+AlignDirection]"
        name="Direction"
        content={Direction}
      />
    </component>
  );
};

export default AxisMultiViewportPanner;
