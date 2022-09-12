import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GradientSkyMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  BaseColor?: member<[number, number, number, number]>;
  _gradients?: member<any>;
}

const GradientSkyMaterial: FC<GradientSkyMaterialInput> = (
  props: GradientSkyMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    BaseColor,
    _gradients,
  } = props;

  return (
    <component
      name="FrooxEngine.GradientSkyMaterial"
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="BaseColor"
        content={BaseColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.GradientSkyMaterial+Gradient]`}
        name="_gradients"
        content={
          _gradients
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.GradientSkyMaterial+Gradient] */
      />
    </component>
  );
};

export default GradientSkyMaterial;
