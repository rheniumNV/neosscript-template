import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface GridLayoutInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  PaddingTop?: member<number>;
  PaddingRight?: member<number>;
  PaddingBottom?: member<number>;
  PaddingLeft?: member<number>;
  CellSize?: member<any>;
  Spacing?: member<any>;
  HorizontalAlign?: member<any>;
  VerticalAlign?: member<any>;
  ExpandWidthToFit?: member<boolean>;
  PreserveAspectOnExpand?: member<boolean>;
  AlignLastRowIndividually?: member<boolean>;
}

const GridLayout: FC<GridLayoutInput> = (props: GridLayoutInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    PaddingTop,
    PaddingRight,
    PaddingBottom,
    PaddingLeft,
    CellSize,
    Spacing,
    HorizontalAlign,
    VerticalAlign,
    ExpandWidthToFit,
    PreserveAspectOnExpand,
    AlignLastRowIndividually,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.GridLayout"
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
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="CellSize"
        content={CellSize}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
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
        name="ExpandWidthToFit"
        content={ExpandWidthToFit}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PreserveAspectOnExpand"
        content={PreserveAspectOnExpand}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AlignLastRowIndividually"
        content={AlignLastRowIndividually}
      />
    </component>
  );
};

export default GridLayout;
