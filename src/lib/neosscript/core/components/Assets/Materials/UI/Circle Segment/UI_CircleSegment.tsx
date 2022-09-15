import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UI_CircleSegmentInput {
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
  _shader?: member<any>;
  FillTint?: member<[number, number, number, number]>;
  OutlineTint?: member<[number, number, number, number]>;
  Overlay?: member<boolean>;
  OverlayTint?: member<[number, number, number, number]>;
  BlendMode?: member<any>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  ZTest?: member<any>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
}

const UI_CircleSegment: FC<UI_CircleSegmentInput> = (
  props: UI_CircleSegmentInput
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
    _shader,
    FillTint,
    OutlineTint,
    Overlay,
    OverlayTint,
    BlendMode,
    Sidedness,
    ZWrite,
    ZTest,
    OffsetFactor,
    OffsetUnits,
  } = props;

  return (
    <component
      name="FrooxEngine.UI_CircleSegment"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_shader"
        content={_shader} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FillTint"
        content={FillTint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="OutlineTint"
        content={OutlineTint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Overlay"
        content={Overlay} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="OverlayTint"
        content={OverlayTint} /* default: [0; 0; 0; 0] */
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OffsetFactor"
        content={OffsetFactor} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="OffsetUnits"
        content={OffsetUnits} /* default: 0 */
      />
    </component>
  );
};

export default UI_CircleSegment;
