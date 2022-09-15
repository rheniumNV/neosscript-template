import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ChannelMatrixMaterialInput {
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
  RedFromRed?: member<number>;
  RedFromGreen?: member<number>;
  RedFromBlue?: member<number>;
  RedOffset?: member<number>;
  GreenFromRed?: member<number>;
  GreenFromGreen?: member<number>;
  GreenFromBlue?: member<number>;
  GreenOffset?: member<number>;
  BlueFromRed?: member<number>;
  BlueFromGreen?: member<number>;
  BlueFromBlue?: member<number>;
  BlueOffset?: member<number>;
  ClampRedMin?: member<number>;
  ClampGreenMin?: member<number>;
  ClampBlueMin?: member<number>;
  ClampRedMax?: member<number>;
  ClampGreenMax?: member<number>;
  ClampBlueMax?: member<number>;
  BlendMode?: member<any>;
  Sidedness?: member<any>;
  ZWrite?: member<any>;
  ZTest?: member<any>;
}

const ChannelMatrixMaterial: FC<ChannelMatrixMaterialInput> = (
  props: ChannelMatrixMaterialInput
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
    RedFromRed,
    RedFromGreen,
    RedFromBlue,
    RedOffset,
    GreenFromRed,
    GreenFromGreen,
    GreenFromBlue,
    GreenOffset,
    BlueFromRed,
    BlueFromGreen,
    BlueFromBlue,
    BlueOffset,
    ClampRedMin,
    ClampGreenMin,
    ClampBlueMin,
    ClampRedMax,
    ClampGreenMax,
    ClampBlueMax,
    BlendMode,
    Sidedness,
    ZWrite,
    ZTest,
  } = props;

  return (
    <component
      name="FrooxEngine.ChannelMatrixMaterial"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RedFromRed"
        content={RedFromRed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RedFromGreen"
        content={RedFromGreen} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RedFromBlue"
        content={RedFromBlue} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RedOffset"
        content={RedOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="GreenFromRed"
        content={GreenFromRed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="GreenFromGreen"
        content={GreenFromGreen} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="GreenFromBlue"
        content={GreenFromBlue} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="GreenOffset"
        content={GreenOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BlueFromRed"
        content={BlueFromRed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BlueFromGreen"
        content={BlueFromGreen} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BlueFromBlue"
        content={BlueFromBlue} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BlueOffset"
        content={BlueOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ClampRedMin"
        content={ClampRedMin} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ClampGreenMin"
        content={ClampGreenMin} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ClampBlueMin"
        content={ClampBlueMin} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ClampRedMax"
        content={ClampRedMax} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ClampGreenMax"
        content={ClampGreenMax} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ClampBlueMax"
        content={ClampBlueMax} /* default: 0 */
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
    </component>
  );
};

export default ChannelMatrixMaterial;
