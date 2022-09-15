import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FormatLocaleStringInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Locale?: member<any>;
  Key?: member<any>;
}

const FormatLocaleString: FC<FormatLocaleStringInput> = (
  props: FormatLocaleStringInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Locale,
    Key,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Assets.FormatLocaleString"
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
        type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`}
        name="_activeVisual"
        content={_activeVisual} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.LocaleResource]`}
        name="Locale"
        content={Locale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.String]`}
        name="Key"
        content={Key} /* default: ID0 */
      />
    </component>
  );
};

export default FormatLocaleString;
