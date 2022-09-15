import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ParentValueLink_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  MatchTag?: member<any>;
  Target?: member<any>;
  WriteBack?: member<boolean>;
  DefaultValue?: member<any>;
}

const ParentValueLink_T: FC<ParentValueLink_TInput> = (
  props: ParentValueLink_TInput
) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    MatchTag,
    Target,
    WriteBack,
    DefaultValue,
  } = props;

  return (
    <component
      name={`FrooxEngine.ParentValueLink\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="MatchTag"
        content={MatchTag} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[${T}]`}
        name="Target"
        content={Target} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="WriteBack"
        content={WriteBack} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="DefaultValue"
        content={DefaultValue} /* default: null */
      />
    </component>
  );
};

export default ParentValueLink_T;
