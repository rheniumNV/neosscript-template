import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DesktopTextureProviderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  DisplayIndex?: member<number>;
}

const DesktopTextureProvider: FC<DesktopTextureProviderInput> = (
  props: DesktopTextureProviderInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    DisplayIndex,
  } = props;

  return (
    <component
      name="FrooxEngine.DesktopTextureProvider"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="DisplayIndex"
        content={DisplayIndex} /* default: 0 */
      />
    </component>
  );
};

export default DesktopTextureProvider;
