import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReflectionMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  ReflectionTexture?: member<any>;
  NormalMap?: member<any>;
  NormalMapScale?: member<[number, number]>;
  NormalMapOffset?: member<[number, number]>;
  Distort?: member<number>;
  TintColor?: member<[number, number, number, number]>;
  BlendMode?: member<any>;
  AlphaCutoff?: member<number>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
}

const ReflectionMaterial: FC<ReflectionMaterialInput> = (
  props: ReflectionMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    ReflectionTexture,
    NormalMap,
    NormalMapScale,
    NormalMapOffset,
    Distort,
    TintColor,
    BlendMode,
    AlphaCutoff,
    Sidedness,
    ZWrite,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
  } = props;

  return (
    <component
      name="FrooxEngine.ReflectionMaterial"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ReflectionTexture"
        content={ReflectionTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="NormalMap"
        content={NormalMap} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NormalMapScale"
        content={NormalMapScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="NormalMapOffset"
        content={NormalMapOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Distort"
        content={Distort} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="TintColor"
        content={TintColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AlphaCutoff"
        content={AlphaCutoff} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`}
        name="Sidedness"
        content={Sidedness} /* default: Auto */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`}
        name="ZWrite"
        content={ZWrite} /* default: Auto */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OffsetFactor"
        content={OffsetFactor} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OffsetUnits"
        content={OffsetUnits} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
    </component>
  );
};

export default ReflectionMaterial;
