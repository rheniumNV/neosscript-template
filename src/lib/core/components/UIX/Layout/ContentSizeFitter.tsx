import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ContentSizeFitterInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  HorizontalFit?: member<any>;
  VerticalFit?: member<any>;
}

const ContentSizeFitter: FC<ContentSizeFitterInput> = (
  props: ContentSizeFitterInput
) => {
  const { id, persistentId, UpdateOrder, Enabled, HorizontalFit, VerticalFit } =
    props;

  return (
    <component
      name="FrooxEngine.UIX.ContentSizeFitter"
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
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.SizeFit]"
        name="HorizontalFit"
        content={HorizontalFit} /* default: Disabled */
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.SizeFit]"
        name="VerticalFit"
        content={VerticalFit} /* default: Disabled */
      />
    </component>
  );
};

export default ContentSizeFitter;
