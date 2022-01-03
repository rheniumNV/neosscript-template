import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface TextFieldInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
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
    UpdateOrder,
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
        type="FrooxEngine.SyncRef`1[FrooxEngine.TextEditor]"
        name="Editor"
        content={Editor}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.Text]"
        name="__text"
        content={__text}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[System.Action`1[FrooxEngine.TextEditor]]"
        name="EditingStarted"
        content={EditingStarted}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[System.Action`1[FrooxEngine.TextEditor]]"
        name="EditingChanged"
        content={EditingChanged}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[System.Action`1[FrooxEngine.TextEditor]]"
        name="EditingFinished"
        content={EditingFinished}
      />
    </component>
  );
};

export default TextField;
