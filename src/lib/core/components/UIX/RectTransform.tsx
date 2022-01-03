import React, { FC } from "react";
import { member, Member } from "../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface RectTransformInput {
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
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="AnchorMin"
        content={AnchorMin}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="AnchorMax"
        content={AnchorMax}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="OffsetMin"
        content={OffsetMin}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="OffsetMax"
        content={OffsetMax}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="Pivot"
        content={Pivot}
      />
    </component>
  );
};

export default RectTransform;
