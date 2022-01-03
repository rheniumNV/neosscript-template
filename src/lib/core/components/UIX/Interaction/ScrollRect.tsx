import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ScrollRectInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  NormalizedPosition?: member<any>;
  HorizontalAlign?: member<any>;
  VerticalAlign?: member<any>;
  ViewportOverride?: member<any>;
  __legacyContent?: member<any>;
}

const ScrollRect: FC<ScrollRectInput> = (props: ScrollRectInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
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
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="NormalizedPosition"
        content={NormalizedPosition}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.LayoutHorizontalAlignment]"
        name="HorizontalAlign"
        content={HorizontalAlign}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.LayoutVerticalAlignment]"
        name="VerticalAlign"
        content={VerticalAlign}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="ViewportOverride"
        content={ViewportOverride}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="__legacyContent"
        content={__legacyContent}
      />
    </component>
  );
};

export default ScrollRect;