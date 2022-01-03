import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ModalOverlayInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  ShowLerp?: member<number>;
  AnimationTime?: member<number>;
  SizeRoot?: member<any>;
  ContentRoot?: member<any>;
  CloseOnContextMenuAction?: member<boolean>;
}

const ModalOverlay: FC<ModalOverlayInput> = (props: ModalOverlayInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    ShowLerp,
    AnimationTime,
    SizeRoot,
    ContentRoot,
    CloseOnContextMenuAction,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ModalOverlay"
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
        name="ShowLerp"
        content={ShowLerp}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="AnimationTime"
        content={AnimationTime}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="SizeRoot"
        content={SizeRoot}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="ContentRoot"
        content={ContentRoot}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="CloseOnContextMenuAction"
        content={CloseOnContextMenuAction}
      />
    </component>
  );
};

export default ModalOverlay;
