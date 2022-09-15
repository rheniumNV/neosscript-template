import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TextFieldInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Editor?: member<any>;
  __text?: member<any>;
  EditingStarted?: member<any>;
  EditingChanged?: member<any>;
  EditingFinished?: member<any>;
}

const TextField: FC<TextFieldInput> = (props: TextFieldInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Editor,
    __text,
    EditingStarted,
    EditingChanged,
    EditingFinished,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.TextField"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
      version={1}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`}
        name="Editor"
        content={Editor} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`}
        name="__text"
        content={__text} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`}
        name="EditingStarted"
        content={EditingStarted} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`}
        name="EditingChanged"
        content={EditingChanged} /* default: FrooxEngine.WorldDelegate */
      />
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`}
        name="EditingFinished"
        content={EditingFinished} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default TextField;
