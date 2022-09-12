import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Texture2D_FormatInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Texture?: member<any>;
}

const Texture2D_Format: FC<Texture2D_FormatInput> = (
  props: Texture2D_FormatInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Texture,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Assets.Texture2D_Format"
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
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Texture2D]`}
        name="Texture"
        content={Texture} /* default: ID0 */
      />
    </component>
  );
};

export default Texture2D_Format;
