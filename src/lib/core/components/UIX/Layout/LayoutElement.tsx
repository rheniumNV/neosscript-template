import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface LayoutElementInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  MinWidth?: member<number>;
  PreferredWidth?: member<number>;
  FlexibleWidth?: member<number>;
  MinHeight?: member<number>;
  PreferredHeight?: member<number>;
  FlexibleHeight?: member<number>;
  Area?: member<number>;
  Priority?: member<number>;
  UseZeroMetrics?: member<boolean>;
}

const LayoutElement: FC<LayoutElementInput> = (props: LayoutElementInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    MinWidth,
    PreferredWidth,
    FlexibleWidth,
    MinHeight,
    PreferredHeight,
    FlexibleHeight,
    Area,
    Priority,
    UseZeroMetrics,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.LayoutElement"
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
        name="MinWidth"
        content={MinWidth}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="PreferredWidth"
        content={PreferredWidth}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="FlexibleWidth"
        content={FlexibleWidth}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="MinHeight"
        content={MinHeight}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="PreferredHeight"
        content={PreferredHeight}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="FlexibleHeight"
        content={FlexibleHeight}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Area"
        content={Area}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="Priority"
        content={Priority}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="UseZeroMetrics"
        content={UseZeroMetrics}
      />
    </component>
  );
};

export default LayoutElement;
