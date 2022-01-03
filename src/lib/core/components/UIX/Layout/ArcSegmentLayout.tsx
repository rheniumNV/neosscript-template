import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Nested?: member<any>;
  NestedSizeRatio?: member<number>;
  Label?: member<any>;
  LabelSize?: member<any>;
  LabelDistance?: member<number>;
}

const ArcSegmentLayout: FC<ArcSegmentLayoutInput> = (
  props: ArcSegmentLayoutInput
) => {
  const {
    id,
    persistentId,
    UpdateOrder,
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
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="Nested"
        content={Nested}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="NestedSizeRatio"
        content={NestedSizeRatio}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.Text]"
        name="Label"
        content={Label}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="LabelSize"
        content={LabelSize}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="LabelDistance"
        content={LabelDistance}
      />
    </component>
  );
};

export default ArcSegmentLayout;
