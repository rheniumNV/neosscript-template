import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PerformanceMetricsInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  User?: member<any>;
  FPS?: member<number>;
  ImmediateFPS?: member<number>;
  RenderTime?: member<number>;
  TotalEngineUpdateTime?: member<number>;
}

const PerformanceMetrics: FC<PerformanceMetricsInput> = (
  props: PerformanceMetricsInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    User,
    FPS,
    ImmediateFPS,
    RenderTime,
    TotalEngineUpdateTime,
  } = props;

  return (
    <component
      name="FrooxEngine.PerformanceMetrics"
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
        type={`FrooxEngine.UserRef`}
        name="User"
        content={
          User
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FPS"
        content={FPS} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ImmediateFPS"
        content={ImmediateFPS} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RenderTime"
        content={RenderTime} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TotalEngineUpdateTime"
        content={TotalEngineUpdateTime} /* default: 0 */
      />
    </component>
  );
};

export default PerformanceMetrics;
