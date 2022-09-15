import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonDynamicImpulseTriggerWithValue_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<any>;
  PressedData?: member<any>;
  PressingData?: member<any>;
  ReleasedData?: member<any>;
  HoverEnterData?: member<any>;
  HoverStayData?: member<any>;
  HoverLeaveData?: member<any>;
}

const ButtonDynamicImpulseTriggerWithValue_T: FC<
  ButtonDynamicImpulseTriggerWithValue_TInput
> = (props: ButtonDynamicImpulseTriggerWithValue_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    PressedData,
    PressingData,
    ReleasedData,
    HoverEnterData,
    HoverStayData,
    HoverLeaveData,
  } = props;

  return (
    <component
      name={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1[${[T]}]`}
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
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`}
        name="PressedData"
        content={
          PressedData
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`}
        name="PressingData"
        content={
          PressingData
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`}
        name="ReleasedData"
        content={
          ReleasedData
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`}
        name="HoverEnterData"
        content={
          HoverEnterData
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`}
        name="HoverStayData"
        content={
          HoverStayData
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`}
        name="HoverLeaveData"
        content={
          HoverLeaveData
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
    </component>
  );
};

export default ButtonDynamicImpulseTriggerWithValue_T;
