import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ModalOverlayInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
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
    updateOrderId,
    updateOrder,
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
        name="ShowLerp"
        content={ShowLerp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AnimationTime"
        content={AnimationTime} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="SizeRoot"
        content={SizeRoot} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="ContentRoot"
        content={ContentRoot} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CloseOnContextMenuAction"
        content={CloseOnContextMenuAction} /* default: False */
      />
    </component>
  );
};

export default ModalOverlay;
