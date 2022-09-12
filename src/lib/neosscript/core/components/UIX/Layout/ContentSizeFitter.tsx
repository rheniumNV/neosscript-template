import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

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
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HorizontalFit?: member<any>;
  VerticalFit?: member<any>;
}

const ContentSizeFitter: FC<ContentSizeFitterInput> = (
  props: ContentSizeFitterInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HorizontalFit,
    VerticalFit,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ContentSizeFitter"
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.SizeFit]`}
        name="HorizontalFit"
        content={HorizontalFit} /* default: Disabled */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.SizeFit]`}
        name="VerticalFit"
        content={VerticalFit} /* default: Disabled */
      />
    </component>
  );
};

export default ContentSizeFitter;
