import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface IntTextEditorParserInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ParseContinuously?: member<boolean>;
  UpdateStringFromValue?: member<boolean>;
  ParsedValue?: member<number>;
  Min?: member<number>;
  Max?: member<number>;
  Increments?: member<number>;
  StringFormat?: member<any>;
}

const IntTextEditorParser: FC<IntTextEditorParserInput> = (
  props: IntTextEditorParserInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ParseContinuously,
    UpdateStringFromValue,
    ParsedValue,
    Min,
    Max,
    Increments,
    StringFormat,
  } = props;

  return (
    <component
      name="FrooxEngine.IntTextEditorParser"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ParseContinuously"
        content={ParseContinuously} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UpdateStringFromValue"
        content={UpdateStringFromValue} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="ParsedValue"
        content={ParsedValue} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Min"
        content={Min} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Max"
        content={Max} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Increments"
        content={Increments} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="StringFormat"
        content={StringFormat} /* default: <i>null</i> */
      />
    </component>
  );
};

export default IntTextEditorParser;
