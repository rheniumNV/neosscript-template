import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticFontInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
  Padding?: member<number>;
  PixelRange?: member<number>;
  GlyphEmSize?: member<number>;
}

const StaticFont: FC<StaticFontInput> = (props: StaticFontInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    URL,
    Padding,
    PixelRange,
    GlyphEmSize,
  } = props;

  return (
    <component
      name="FrooxEngine.StaticFont"
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
        type={`FrooxEngine.Sync\`1[System.Uri]`}
        name="URL"
        content={URL} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Padding"
        content={Padding} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="PixelRange"
        content={PixelRange} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="GlyphEmSize"
        content={GlyphEmSize} /* default: 0 */
      />
    </component>
  );
};

export default StaticFont;
