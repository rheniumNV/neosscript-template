import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface HorizontalLayoutInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
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
    UpdateOrder,
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
        type="FrooxEngine.Sync`1[System.Single]"
        name="PaddingTop"
        content={PaddingTop}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="PaddingRight"
        content={PaddingRight}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="PaddingBottom"
        content={PaddingBottom}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="PaddingLeft"
        content={PaddingLeft}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Spacing"
        content={Spacing}
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
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ForceExpandWidth"
        content={ForceExpandWidth}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ForceExpandHeight"
        content={ForceExpandHeight}
      />
    </component>
  );
};

export default HorizontalLayout;
