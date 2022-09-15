import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SampleTexture2D_UVInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Texture?: member<any>;
  UV?: member<any>;
  WrapMode?: member<any>;
}

const SampleTexture2D_UV: FC<SampleTexture2D_UVInput> = (
  props: SampleTexture2D_UVInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Texture,
    UV,
    WrapMode,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Assets.SampleTexture2D_UV"
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
      <Member
        type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`}
        name="UV"
        content={UV} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[CodeX.WrapMode]`}
        name="WrapMode"
        content={WrapMode} /* default: ID0 */
      />
    </component>
  );
};

export default SampleTexture2D_UV;
