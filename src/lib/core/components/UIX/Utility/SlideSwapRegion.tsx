import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  _current?: member<any>;
}

const SlideSwapRegion: FC<SlideSwapRegionInput> = (
  props: SlideSwapRegionInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, _current } = props;

  return (
    <component
      name="FrooxEngine.UIX.SlideSwapRegion"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="_current"
        content={_current} /* default: ID0 */
      />
    </component>
  );
};

export default SlideSwapRegion;
