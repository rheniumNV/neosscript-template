import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RadiantModalOverlayInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ShowLerp?: member<number>;
  AnimationTime?: member<number>;
  SizeRoot?: member<any>;
  ContentRoot?: member<any>;
  CloseOnContextMenuAction?: member<boolean>;
  BlurSpread?: member<number>;
  BackgroundColor?: member<[number, number, number, number]>;
  ContentAnimationScaleOffset?: member<number>;
  Padding?: member<number>;
  _blur?: member<any>;
  _blurGraphic?: member<any>;
  _blurSpread?: member<any>;
  _backgroundColor?: member<any>;
  _maskRect?: member<any>;
  _overlayAnchorMin?: member<any>;
  _overlayAnchorMax?: member<any>;
  _contentOffsetMin?: member<any>;
  _contentOffsetMax?: member<any>;
}

const RadiantModalOverlay: FC<RadiantModalOverlayInput> = (
  props: RadiantModalOverlayInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ShowLerp,
    AnimationTime,
    SizeRoot,
    ContentRoot,
    CloseOnContextMenuAction,
    BlurSpread,
    BackgroundColor,
    ContentAnimationScaleOffset,
    Padding,
    _blur,
    _blurGraphic,
    _blurSpread,
    _backgroundColor,
    _maskRect,
    _overlayAnchorMin,
    _overlayAnchorMax,
    _contentOffsetMin,
    _contentOffsetMax,
  } = props;

  return (
    <component
      name="FrooxEngine.RadiantModalOverlay"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ShowLerp"
        content={ShowLerp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AnimationTime"
        content={AnimationTime} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="SizeRoot"
        content={SizeRoot} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="ContentRoot"
        content={ContentRoot} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CloseOnContextMenuAction"
        content={CloseOnContextMenuAction} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BlurSpread"
        content={BlurSpread} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="BackgroundColor"
        content={BackgroundColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="ContentAnimationScaleOffset"
        content={ContentAnimationScaleOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Padding"
        content={Padding} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.BlurMaterial]`}
        name="_blur"
        content={_blur} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RawGraphic]`}
        name="_blurGraphic"
        content={_blurGraphic} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="_blurSpread"
        content={_blurSpread} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.color]`}
        name="_backgroundColor"
        content={_backgroundColor} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.Rect]`}
        name="_maskRect"
        content={_maskRect} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="_overlayAnchorMin"
        content={_overlayAnchorMin} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="_overlayAnchorMax"
        content={_overlayAnchorMax} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="_contentOffsetMin"
        content={_contentOffsetMin} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="_contentOffsetMax"
        content={_contentOffsetMax} /* default: ID0 */
      />
    </component>
  );
};

export default RadiantModalOverlay;
