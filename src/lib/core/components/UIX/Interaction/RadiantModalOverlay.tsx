import React, { FC } from "react";
import { member, Member } from "../../../Member";

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
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  ShowLerp?: member<number>;
  AnimationTime?: member<number>;
  SizeRoot?: member<any>;
  ContentRoot?: member<any>;
  CloseOnContextMenuAction?: member<boolean>;
  BlurSpread?: member<number>;
  BackgroundColor?: member<any>;
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
    UpdateOrder,
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
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="ShowLerp"
        content={ShowLerp}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="AnimationTime"
        content={AnimationTime}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="SizeRoot"
        content={SizeRoot}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="ContentRoot"
        content={ContentRoot}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="CloseOnContextMenuAction"
        content={CloseOnContextMenuAction}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="BlurSpread"
        content={BlurSpread}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="BackgroundColor"
        content={BackgroundColor}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="ContentAnimationScaleOffset"
        content={ContentAnimationScaleOffset}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Padding"
        content={Padding}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.BlurMaterial]"
        name="_blur"
        content={_blur}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RawGraphic]"
        name="_blurGraphic"
        content={_blurGraphic}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="_blurSpread"
        content={_blurSpread}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.color]"
        name="_backgroundColor"
        content={_backgroundColor}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.Rect]"
        name="_maskRect"
        content={_maskRect}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="_overlayAnchorMin"
        content={_overlayAnchorMin}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="_overlayAnchorMax"
        content={_overlayAnchorMax}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="_contentOffsetMin"
        content={_contentOffsetMin}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="_contentOffsetMax"
        content={_contentOffsetMax}
      />
    </component>
  );
};

export default RadiantModalOverlay;
