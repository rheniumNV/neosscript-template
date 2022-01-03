import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface FixedRectFitterLayoutInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  HorizontalAlign?: member<any>;
  VerticalAlign?: member<any>;
  Mode?: member<any>;
  AllowShrink?: member<boolean>;
  AllowGrow?: member<boolean>;
}

const FixedRectFitterLayout: FC<FixedRectFitterLayoutInput> = (
  props: FixedRectFitterLayoutInput
) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    HorizontalAlign,
    VerticalAlign,
    Mode,
    AllowShrink,
    AllowGrow,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.FixedRectFitterLayout"
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
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.FixedRectFitterLayout+FitMode]"
        name="Mode"
        content={Mode}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AllowShrink"
        content={AllowShrink}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AllowGrow"
        content={AllowGrow}
      />
    </component>
  );
};

export default FixedRectFitterLayout;
