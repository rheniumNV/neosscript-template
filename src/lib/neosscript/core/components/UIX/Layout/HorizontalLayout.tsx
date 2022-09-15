import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface HorizontalLayoutInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  PaddingTop?: member<number>;
  PaddingRight?: member<number>;
  PaddingBottom?: member<number>;
  PaddingLeft?: member<number>;
  Spacing?: member<number>;
  HorizontalAlign?: member<any>;
  VerticalAlign?: member<any>;
  ForceExpandWidth?: member<boolean>;
  ForceExpandHeight?: member<boolean>;
}

const HorizontalLayout: FC<HorizontalLayoutInput> = (
  props: HorizontalLayoutInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    PaddingTop,
    PaddingRight,
    PaddingBottom,
    PaddingLeft,
    Spacing,
    HorizontalAlign,
    VerticalAlign,
    ForceExpandWidth,
    ForceExpandHeight,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.HorizontalLayout"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PaddingTop"
        content={PaddingTop} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PaddingRight"
        content={PaddingRight} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PaddingBottom"
        content={PaddingBottom} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PaddingLeft"
        content={PaddingLeft} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Spacing"
        content={Spacing} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutHorizontalAlignment]`}
        name="HorizontalAlign"
        content={HorizontalAlign} /* default: Left */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutVerticalAlignment]`}
        name="VerticalAlign"
        content={VerticalAlign} /* default: Top */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ForceExpandWidth"
        content={ForceExpandWidth} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ForceExpandHeight"
        content={ForceExpandHeight} /* default: False */
      />
    </component>
  );
};

export default HorizontalLayout;
