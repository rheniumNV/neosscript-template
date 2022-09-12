import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TooltipSimulatorInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Tooltip?: member<any>;
  SimulatingUser?: member<any>;
  Primary?: member<boolean>;
  Secondary?: member<boolean>;
  Strength?: member<number>;
  Axis?: member<[number, number]>;
}

const TooltipSimulator: FC<TooltipSimulatorInput> = (
  props: TooltipSimulatorInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Tooltip,
    SimulatingUser,
    Primary,
    Secondary,
    Strength,
    Axis,
  } = props;

  return (
    <component
      name="FrooxEngine.TooltipSimulator"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IToolTip]`}
        name="Tooltip"
        content={Tooltip} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`}
        name="SimulatingUser"
        content={SimulatingUser} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Primary"
        content={Primary} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Secondary"
        content={Secondary} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Strength"
        content={Strength} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Axis"
        content={Axis} /* default: [0; 0] */
      />
    </component>
  );
};

export default TooltipSimulator;
