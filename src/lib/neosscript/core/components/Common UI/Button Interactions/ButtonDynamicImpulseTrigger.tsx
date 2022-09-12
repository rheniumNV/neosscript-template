import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonDynamicImpulseTriggerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  PressedTag?: member<any>;
  PressingTag?: member<any>;
  ReleasedTag?: member<any>;
  HoverEnterTag?: member<any>;
  HoverStayTag?: member<any>;
  HoverLeaveTag?: member<any>;
}

const ButtonDynamicImpulseTrigger: FC<ButtonDynamicImpulseTriggerInput> = (
  props: ButtonDynamicImpulseTriggerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    PressedTag,
    PressingTag,
    ReleasedTag,
    HoverEnterTag,
    HoverStayTag,
    HoverLeaveTag,
  } = props;

  return (
    <component
      name="FrooxEngine.ButtonDynamicImpulseTrigger"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="PressedTag"
        content={PressedTag} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="PressingTag"
        content={PressingTag} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="ReleasedTag"
        content={ReleasedTag} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="HoverEnterTag"
        content={HoverEnterTag} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="HoverStayTag"
        content={HoverStayTag} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="HoverLeaveTag"
        content={HoverLeaveTag} /* default: <i>null</i> */
      />
    </component>
  );
};

export default ButtonDynamicImpulseTrigger;
