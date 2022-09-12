import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TouchableTextFieldInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TextEditor?: member<any>;
  AcceptOutOfSightTouch?: member<boolean>;
  AcceptPhysicalTouch?: member<boolean>;
  AcceptRemoteTouch?: member<boolean>;
  EditModeOnly?: member<boolean>;
  ActiveUserRootOnly?: member<boolean>;
}

const TouchableTextField: FC<TouchableTextFieldInput> = (
  props: TouchableTextFieldInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TextEditor,
    AcceptOutOfSightTouch,
    AcceptPhysicalTouch,
    AcceptRemoteTouch,
    EditModeOnly,
    ActiveUserRootOnly,
  } = props;

  return (
    <component
      name="FrooxEngine.TouchableTextField"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`}
        name="TextEditor"
        content={TextEditor} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AcceptOutOfSightTouch"
        content={AcceptOutOfSightTouch} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AcceptPhysicalTouch"
        content={AcceptPhysicalTouch} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AcceptRemoteTouch"
        content={AcceptRemoteTouch} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="EditModeOnly"
        content={EditModeOnly} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ActiveUserRootOnly"
        content={ActiveUserRootOnly} /* default: False */
      />
    </component>
  );
};

export default TouchableTextField;
