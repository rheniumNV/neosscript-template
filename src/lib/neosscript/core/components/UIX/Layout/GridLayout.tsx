import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GridLayoutInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  PaddingTop?: member<number>;
  PaddingRight?: member<number>;
  PaddingBottom?: member<number>;
  PaddingLeft?: member<number>;
  CellSize?: member<[number, number]>;
  Spacing?: member<[number, number]>;
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
    updateOrderId,
    updateOrder,
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
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="CellSize"
        content={CellSize} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Spacing"
        content={Spacing} /* default: [0; 0] */
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
        name="ExpandWidthToFit"
        content={ExpandWidthToFit} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PreserveAspectOnExpand"
        content={PreserveAspectOnExpand} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AlignLastRowIndividually"
        content={AlignLastRowIndividually} /* default: False */
      />
    </component>
  );
};

export default GridLayout;
