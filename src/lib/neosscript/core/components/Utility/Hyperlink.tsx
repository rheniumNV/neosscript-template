import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface HyperlinkInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
  OpenOnce?: member<boolean>;
  Reason?: member<any>;
}

const Hyperlink: FC<HyperlinkInput> = (props: HyperlinkInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    URL,
    OpenOnce,
    Reason,
  } = props;

  return (
    <component
      name="FrooxEngine.Hyperlink"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OpenOnce"
        content={OpenOnce} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Reason"
        content={Reason} /* default: <i>null</i> */
      />
    </component>
  );
};

export default Hyperlink;
