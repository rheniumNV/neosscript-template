import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TextExportableInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TextSource?: member<any>;
  Extension?: member<any>;
  Description?: member<any>;
}

const TextExportable: FC<TextExportableInput> = (
  props: TextExportableInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TextSource,
    Extension,
    Description,
  } = props;

  return (
    <component
      name="FrooxEngine.TextExportable"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IValue\`1[System.String]]`}
        name="TextSource"
        content={TextSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Extension"
        content={Extension} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Description"
        content={Description} /* default: <i>null</i> */
      />
    </component>
  );
};

export default TextExportable;
