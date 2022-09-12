import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReferenceRadio_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  CheckVisual?: member<any>;
  OptionReference?: member<any>;
  TargetReference?: member<any>;
}

const ReferenceRadio_T: FC<ReferenceRadio_TInput> = (
  props: ReferenceRadio_TInput
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
    CheckVisual,
    OptionReference,
    TargetReference,
  } = props;

  return (
    <component
      name={`FrooxEngine.UIX.ReferenceRadio\`1[${[T]}]`}
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
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="CheckVisual"
        content={CheckVisual} /* default: null */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[${T}]`}
        name="OptionReference"
        content={OptionReference} /* default: null */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`}
        name="TargetReference"
        content={TargetReference} /* default: null */
      />
    </component>
  );
};

export default ReferenceRadio_T;
