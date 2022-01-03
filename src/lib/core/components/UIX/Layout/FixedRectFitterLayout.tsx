import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FixedRectFitterLayoutInput {
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
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.LayoutHorizontalAlignment]"
        name="HorizontalAlign"
        content={HorizontalAlign} /* default: Left */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.LayoutVerticalAlignment]"
        name="VerticalAlign"
        content={VerticalAlign} /* default: Top */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.FixedRectFitterLayout+FitMode]"
        name="Mode"
        content={Mode} /* default: FitLongerSide */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AllowShrink"
        content={AllowShrink} /* default: False */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AllowGrow"
        content={AllowGrow} /* default: False */
      />
    </component>
  );
};

export default FixedRectFitterLayout;
