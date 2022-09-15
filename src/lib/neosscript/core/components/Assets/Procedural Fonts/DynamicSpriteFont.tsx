import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DynamicSpriteFontInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  MaxSize?: member<number>;
  Glyphs?: member<any>;
}

const DynamicSpriteFont: FC<DynamicSpriteFontInput> = (
  props: DynamicSpriteFontInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    MaxSize,
    Glyphs,
  } = props;

  return (
    <component
      name="FrooxEngine.DynamicSpriteFont"
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
        name="HighPriorityIntegration"
        content={HighPriorityIntegration} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="MaxSize"
        content={MaxSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.DynamicSpriteFont+SpriteGlyph]`}
        name="Glyphs"
        content={
          Glyphs
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.DynamicSpriteFont+SpriteGlyph] */
      />
    </component>
  );
};

export default DynamicSpriteFont;
