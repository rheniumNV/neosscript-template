import React, { FC } from "react";
import { member, Member } from "../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RectTransformInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  AnchorMin?: member<any>;
  AnchorMax?: member<any>;
  OffsetMin?: member<any>;
  OffsetMax?: member<any>;
  Pivot?: member<any>;
}

const RectTransform: FC<RectTransformInput> = (props: RectTransformInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    AnchorMin,
    AnchorMax,
    OffsetMin,
    OffsetMax,
    Pivot,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.RectTransform"
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
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="AnchorMin"
        content={AnchorMin} /* default: [0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="AnchorMax"
        content={AnchorMax} /* default: [0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="OffsetMin"
        content={OffsetMin} /* default: [0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="OffsetMax"
        content={OffsetMax} /* default: [0; 0] */
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="Pivot"
        content={Pivot} /* default: [0; 0] */
      />
    </component>
  );
};

export default RectTransform;
