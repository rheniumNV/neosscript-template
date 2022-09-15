import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UVAtlasAnimatorInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ScaleField?: member<any>;
  OffsetField?: member<any>;
  AtlasInfo?: member<any>;
  Frame?: member<number>;
}

const UVAtlasAnimator: FC<UVAtlasAnimatorInput> = (
  props: UVAtlasAnimatorInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ScaleField,
    OffsetField,
    AtlasInfo,
    Frame,
  } = props;

  return (
    <component
      name="FrooxEngine.UVAtlasAnimator"
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
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="ScaleField"
        content={ScaleField} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="OffsetField"
        content={OffsetField} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.AtlasInfo]`}
        name="AtlasInfo"
        content={AtlasInfo} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Frame"
        content={Frame} /* default: 0 */
      />
    </component>
  );
};

export default UVAtlasAnimator;
