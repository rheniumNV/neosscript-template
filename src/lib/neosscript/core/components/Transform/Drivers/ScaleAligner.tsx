import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ScaleAlignerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AutoAddChildren?: member<boolean>;
  BaseSize?: member<[number, number, number]>;
  Increment?: member<[number, number, number]>;
  Multiplier?: member<[number, number, number]>;
  NonUniform?: member<boolean>;
  _targets?: member<any>;
}

const ScaleAligner: FC<ScaleAlignerInput> = (props: ScaleAlignerInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    AutoAddChildren,
    BaseSize,
    Increment,
    Multiplier,
    NonUniform,
    _targets,
  } = props;

  return (
    <component
      name="FrooxEngine.ScaleAligner"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoAddChildren"
        content={AutoAddChildren} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="BaseSize"
        content={BaseSize} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Increment"
        content={Increment} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Multiplier"
        content={Multiplier} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="NonUniform"
        content={NonUniform} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.ScaleAligner+Target]`}
        name="_targets"
        content={
          _targets
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.ScaleAligner+Target] */
      />
    </component>
  );
};

export default ScaleAligner;
