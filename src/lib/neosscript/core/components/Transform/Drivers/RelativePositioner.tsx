import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RelativePositionerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Reference?: member<any>;
  ReferenceBoundsSpace?: member<any>;
  ReferenceAnchor?: member<[number, number, number]>;
  ReferenceOffset?: member<[number, number, number]>;
  DestroyAfterDone?: member<boolean>;
  _target?: member<any>;
}

const RelativePositioner: FC<RelativePositionerInput> = (
  props: RelativePositionerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Reference,
    ReferenceBoundsSpace,
    ReferenceAnchor,
    ReferenceOffset,
    DestroyAfterDone,
    _target,
  } = props;

  return (
    <component
      name="FrooxEngine.RelativePositioner"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="Reference"
        content={Reference} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RootSpace`}
        name="ReferenceBoundsSpace"
        content={
          ReferenceBoundsSpace
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="ReferenceAnchor"
        content={ReferenceAnchor} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="ReferenceOffset"
        content={ReferenceOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DestroyAfterDone"
        content={DestroyAfterDone} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_target"
        content={_target} /* default: ID0 */
      />
    </component>
  );
};

export default RelativePositioner;
