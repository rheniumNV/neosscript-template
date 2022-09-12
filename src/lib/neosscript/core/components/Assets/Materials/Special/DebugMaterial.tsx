import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DebugMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Scale?: member<number>;
  Offset?: member<[number, number, number]>;
  Visualize?: member<any>;
  Normalize?: member<boolean>;
  RenderQueue?: member<number>;
}

const DebugMaterial: FC<DebugMaterialInput> = (props: DebugMaterialInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    Scale,
    Offset,
    Visualize,
    Normalize,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.DebugMaterial"
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
        name="HighPriorityIntegration"
        content={HighPriorityIntegration} /* default: False */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_shader"
        content={_shader} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Scale"
        content={Scale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Offset"
        content={Offset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.DebugMaterial+MeshData]`}
        name="Visualize"
        content={Visualize} /* default: Position */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Normalize"
        content={Normalize} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
    </component>
  );
};

export default DebugMaterial;
