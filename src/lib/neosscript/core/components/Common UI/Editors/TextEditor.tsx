import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TextEditorInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Text?: member<any>;
  Undo?: member<boolean>;
  UndoDescription?: member<any>;
  FinishHandling?: member<any>;
  AutoCaretColorField?: member<boolean>;
  CaretColorField?: member<[number, number, number, number]>;
  SelectionColorField?: member<[number, number, number, number]>;
  EditingStarted?: member<any>;
  EditingChanged?: member<any>;
  EditingFinished?: member<any>;
  SubmitPressed?: member<any>;
}

const TextEditor: FC<TextEditorInput> = (props: TextEditorInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Text,
    Undo,
    UndoDescription,
    FinishHandling,
    AutoCaretColorField,
    CaretColorField,
    SelectionColorField,
    EditingStarted,
    EditingChanged,
    EditingFinished,
    SubmitPressed,
  } = props;

  return (
    <component
      name="FrooxEngine.TextEditor"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IText]`}
        name="Text"
        content={Text} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Undo"
        content={Undo} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="UndoDescription"
        content={UndoDescription} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextEditor+FinishAction]`}
        name="FinishHandling"
        content={FinishHandling} /* default: LeaveAsIs */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoCaretColorField"
        content={AutoCaretColorField} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="CaretColorField"
        content={CaretColorField} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SelectionColorField"
        content={SelectionColorField} /* default: [0; 0; 0; 0] */
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
      <Member
        type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`}
        name="SubmitPressed"
        content={SubmitPressed} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default TextEditor;
