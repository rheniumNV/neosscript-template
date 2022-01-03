import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ContentSizeFitterInput {
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
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.SizeFit]"
        name="HorizontalFit"
        content={HorizontalFit}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.SizeFit]"
        name="VerticalFit"
        content={VerticalFit}
      />
    </component>
  );
};

export default ContentSizeFitter;
