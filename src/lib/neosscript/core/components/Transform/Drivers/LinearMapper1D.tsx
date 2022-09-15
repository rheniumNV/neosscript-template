import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LinearMapper1DInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  Target?: member<any>;
  SourceMin?: member<number>;
  SourceMax?: member<number>;
  TargetMin?: member<number>;
  TargetMax?: member<number>;
  AllowReverseMapping?: member<boolean>;
  Clamp?: member<boolean>;
}

const LinearMapper1D: FC<LinearMapper1DInput> = (
  props: LinearMapper1DInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Source,
    Target,
    SourceMin,
    SourceMax,
    TargetMin,
    TargetMax,
    AllowReverseMapping,
    Clamp,
  } = props;

  return (
    <component
      name="FrooxEngine.LinearMapper1D"
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.IValue\`1[System.Single]]`}
        name="Source"
        content={Source} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SourceMin"
        content={SourceMin} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SourceMax"
        content={SourceMax} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TargetMin"
        content={TargetMin} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TargetMax"
        content={TargetMax} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowReverseMapping"
        content={AllowReverseMapping} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Clamp"
        content={Clamp} /* default: False */
      />
    </component>
  );
};

export default LinearMapper1D;
