import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PixelateMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  Rect?: member<any>;
  RectClip?: member<boolean>;
  ColorMask?: member<any>;
  StencilComparison?: member<any>;
  StencilOperation?: member<any>;
  StencilID?: member<any>;
  StencilWriteMask?: member<any>;
  StencilReadMask?: member<any>;
  RenderQueue?: member<number>;
  PerObject?: member<boolean>;
  Resolution?: member<[number, number]>;
  ResolutionMagnitudeTexture?: member<any>;
  ResolutionTextureScale?: member<[number, number]>;
  ResolutionTextureOffset?: member<[number, number]>;
  BlendMode?: member<any>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  ZTest?: member<any>;
  _global?: member<any>;
  _perObject?: member<any>;
}

const PixelateMaterial: FC<PixelateMaterialInput> = (
  props: PixelateMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    Rect,
    RectClip,
    ColorMask,
    StencilComparison,
    StencilOperation,
    StencilID,
    StencilWriteMask,
    StencilReadMask,
    RenderQueue,
    PerObject,
    Resolution,
    ResolutionMagnitudeTexture,
    ResolutionTextureScale,
    ResolutionTextureOffset,
    BlendMode,
    Sidedness,
    ZWrite,
    ZTest,
    _global,
    _perObject,
  } = props;

  return (
    <component
      name="FrooxEngine.PixelateMaterial"
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
        type={`FrooxEngine.Sync\`1[BaseX.Rect]`}
        name="Rect"
        content={Rect} /* default: [X=0; Y=0; W=0; H=0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="RectClip"
        content={RectClip} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ColorMask]`}
        name="ColorMask"
        content={ColorMask} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.StencilComparison]`}
        name="StencilComparison"
        content={StencilComparison} /* default: Disabled */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.StencilOperation]`}
        name="StencilOperation"
        content={StencilOperation} /* default: Keep */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Byte]`}
        name="StencilID"
        content={StencilID} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Byte]`}
        name="StencilWriteMask"
        content={StencilWriteMask} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Byte]`}
        name="StencilReadMask"
        content={StencilReadMask} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="RenderQueue"
        content={RenderQueue} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PerObject"
        content={PerObject} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Resolution"
        content={Resolution} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="ResolutionMagnitudeTexture"
        content={ResolutionMagnitudeTexture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ResolutionTextureScale"
        content={ResolutionTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ResolutionTextureOffset"
        content={ResolutionTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`}
        name="ZTest"
        content={ZTest} /* default: Less */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_global"
        content={_global} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_perObject"
        content={_perObject} /* default: ID0 */
      />
    </component>
  );
};

export default PixelateMaterial;
