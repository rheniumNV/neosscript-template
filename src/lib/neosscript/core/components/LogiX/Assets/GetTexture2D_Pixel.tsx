import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GetTexture2D_PixelInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Texture?: member<any>;
  Position?: member<any>;
  MipLevel?: member<any>;
}

const GetTexture2D_Pixel: FC<GetTexture2D_PixelInput> = (
  props: GetTexture2D_PixelInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Texture,
    Position,
    MipLevel,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Assets.GetTexture2D_Pixel"
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
        type={`FrooxEngine.LogiX.Input\`1[BaseX.int2]`}
        name="Position"
        content={Position} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Int32]`}
        name="MipLevel"
        content={MipLevel} /* default: ID0 */
      />
    </component>
  );
};

export default GetTexture2D_Pixel;
