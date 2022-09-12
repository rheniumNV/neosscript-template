import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ConfirmationHandlerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Label?: member<any>;
  Color?: member<any>;
  OriginalLabel?: member<any>;
  OriginalColor?: member<[number, number, number, number]>;
}

const ConfirmationHandler: FC<ConfirmationHandlerInput> = (
  props: ConfirmationHandlerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Label,
    Color,
    OriginalLabel,
    OriginalColor,
  } = props;

  return (
    <component
      name="FrooxEngine.ConfirmationHandler"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`}
        name="Label"
        content={Label} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[BaseX.color]]`}
        name="Color"
        content={Color} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="OriginalLabel"
        content={OriginalLabel} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="OriginalColor"
        content={OriginalColor} /* default: [0; 0; 0; 0] */
      />
    </component>
  );
};

export default ConfirmationHandler;
