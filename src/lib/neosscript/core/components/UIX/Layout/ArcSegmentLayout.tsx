import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ArcSegmentLayoutInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Nested?: member<any>;
  NestedSizeRatio?: member<number>;
  Label?: member<any>;
  LabelSize?: member<[number, number]>;
  LabelDistance?: member<number>;
}

const ArcSegmentLayout: FC<ArcSegmentLayoutInput> = (
  props: ArcSegmentLayoutInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Nested,
    NestedSizeRatio,
    Label,
    LabelSize,
    LabelDistance,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ArcSegmentLayout"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="Nested"
        content={Nested} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NestedSizeRatio"
        content={NestedSizeRatio} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`}
        name="Label"
        content={Label} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="LabelSize"
        content={LabelSize} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LabelDistance"
        content={LabelDistance} /* default: 0 */
      />
    </component>
  );
};

export default ArcSegmentLayout;
