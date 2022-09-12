import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ScrollRectInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  NormalizedPosition?: member<[number, number]>;
  HorizontalAlign?: member<any>;
  VerticalAlign?: member<any>;
  ViewportOverride?: member<any>;
  __legacyContent?: member<any>;
}

const ScrollRect: FC<ScrollRectInput> = (props: ScrollRectInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    NormalizedPosition,
    HorizontalAlign,
    VerticalAlign,
    ViewportOverride,
    __legacyContent,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ScrollRect"
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
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NormalizedPosition"
        content={NormalizedPosition} /* default: [0; 0] */
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="ViewportOverride"
        content={ViewportOverride} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="__legacyContent"
        content={__legacyContent} /* default: ID0 */
      />
    </component>
  );
};

export default ScrollRect;
