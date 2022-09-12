import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TextureSizeDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Texture?: member<any>;
  Target?: member<any>;
  DriveMode?: member<any>;
  Premultiply?: member<[number, number]>;
  Ratio?: member<[number, number]>;
  MaxSize?: member<[number, number]>;
}

const TextureSizeDriver: FC<TextureSizeDriverInput> = (
  props: TextureSizeDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Texture,
    Target,
    DriveMode,
    Premultiply,
    Ratio,
    MaxSize,
  } = props;

  return (
    <component
      name="FrooxEngine.TextureSizeDriver"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Texture"
        content={Texture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureSizeDriver+Mode]`}
        name="DriveMode"
        content={DriveMode} /* default: Absolute */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Premultiply"
        content={Premultiply} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Ratio"
        content={Ratio} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="MaxSize"
        content={MaxSize} /* default: [0; 0] */
      />
    </component>
  );
};

export default TextureSizeDriver;
