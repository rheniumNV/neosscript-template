import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LayoutElementInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
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
    updateOrderId,
    updateOrder,
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
        name="MinWidth"
        content={MinWidth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PreferredWidth"
        content={PreferredWidth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FlexibleWidth"
        content={FlexibleWidth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MinHeight"
        content={MinHeight} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PreferredHeight"
        content={PreferredHeight} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FlexibleHeight"
        content={FlexibleHeight} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Area"
        content={Area} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Priority"
        content={Priority} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseZeroMetrics"
        content={UseZeroMetrics} /* default: False */
      />
    </component>
  );
};

export default LayoutElement;
