import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ModalOverlayManagerInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Template?: member<any>;
  Constructor?: member<any>;
  ModalOverlayRequested?: member<any>;
  ModalOverlayGenerated?: member<any>;
  SpawnRoot?: member<any>;
}

const ModalOverlayManager: FC<ModalOverlayManagerInput> = (
  props: ModalOverlayManagerInput
) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Template,
    Constructor,
    ModalOverlayRequested,
    ModalOverlayGenerated,
    SpawnRoot,
  } = props;

  return (
    <component
      name="FrooxEngine.ModalOverlayManager"
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
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.ModalOverlay]"
        name="Template"
        content={Template}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ModalOverlayConstructor]"
        name="Constructor"
        content={Constructor}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[System.Action`1[FrooxEngine.ModalOverlayManager]]"
        name="ModalOverlayRequested"
        content={ModalOverlayRequested}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[System.Action`2[FrooxEngine.ModalOverlayManager,FrooxEngine.UIX.ModalOverlay]]"
        name="ModalOverlayGenerated"
        content={ModalOverlayGenerated}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.Slot]"
        name="SpawnRoot"
        content={SpawnRoot}
      />
    </component>
  );
};

export default ModalOverlayManager;
