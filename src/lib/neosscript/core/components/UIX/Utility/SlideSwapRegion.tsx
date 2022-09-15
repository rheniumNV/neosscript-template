import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SlideSwapRegionInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _current?: member<any>;
}

const SlideSwapRegion: FC<SlideSwapRegionInput> = (
  props: SlideSwapRegionInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled, _current } =
    props;

  return (
    <component
      name="FrooxEngine.UIX.SlideSwapRegion"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="_current"
        content={_current} /* default: ID0 */
      />
    </component>
  );
};

export default SlideSwapRegion;
