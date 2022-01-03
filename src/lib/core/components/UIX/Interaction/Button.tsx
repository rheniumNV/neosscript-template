import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ButtonInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  BaseColor?: member<any>;
  __legacy_NormalColor?: member<any>;
  __legacy_HighlightColor?: member<any>;
  __legacy_PressColor?: member<any>;
  __legacy_DisabledColor?: member<any>;
  __legacy_TintColorMode?: member<any>;
  __legacy_ColorDrive?: member<any>;
  IsPressed?: member<boolean>;
  IsHovering?: member<boolean>;
  HoverVibrate?: member<any>;
  PressVibrate?: member<any>;
  ClearFocusOnPress?: member<boolean>;
  PassThroughHorizontalMovement?: member<boolean>;
  PassThroughVerticalMovement?: member<boolean>;
  RequireLockInToPress?: member<boolean>;
  RequireInitialPress?: member<boolean>;
  PressPoint?: member<any>;
  Pressed?: member<any>;
  Pressing?: member<any>;
  Released?: member<any>;
  HoverEnter?: member<any>;
  HoverStay?: member<any>;
  HoverLeave?: member<any>;
}

const Button: FC<ButtonInput> = (props: ButtonInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    BaseColor,
    __legacy_NormalColor,
    __legacy_HighlightColor,
    __legacy_PressColor,
    __legacy_DisabledColor,
    __legacy_TintColorMode,
    __legacy_ColorDrive,
    IsPressed,
    IsHovering,
    HoverVibrate,
    PressVibrate,
    ClearFocusOnPress,
    PassThroughHorizontalMovement,
    PassThroughVerticalMovement,
    RequireLockInToPress,
    RequireInitialPress,
    PressPoint,
    Pressed,
    Pressing,
    Released,
    HoverEnter,
    HoverStay,
    HoverLeave,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.Button"
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
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="BaseColor"
        content={BaseColor}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_NormalColor"
        content={__legacy_NormalColor}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_HighlightColor"
        content={__legacy_HighlightColor}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_PressColor"
        content={__legacy_PressColor}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="__legacy_DisabledColor"
        content={__legacy_DisabledColor}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.UIX.InteractionElement+ColorMode]"
        name="__legacy_TintColorMode"
        content={__legacy_TintColorMode}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.color]"
        name="__legacy_ColorDrive"
        content={__legacy_ColorDrive}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="IsPressed"
        content={IsPressed}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="IsHovering"
        content={IsHovering}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.VibratePreset]"
        name="HoverVibrate"
        content={HoverVibrate}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.VibratePreset]"
        name="PressVibrate"
        content={PressVibrate}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ClearFocusOnPress"
        content={ClearFocusOnPress}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PassThroughHorizontalMovement"
        content={PassThroughHorizontalMovement}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="PassThroughVerticalMovement"
        content={PassThroughVerticalMovement}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="RequireLockInToPress"
        content={RequireLockInToPress}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="RequireInitialPress"
        content={RequireInitialPress}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="PressPoint"
        content={PressPoint}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="Pressed"
        content={Pressed}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="Pressing"
        content={Pressing}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="Released"
        content={Released}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="HoverEnter"
        content={HoverEnter}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="HoverStay"
        content={HoverStay}
      />
      <Member
        type="FrooxEngine.SyncDelegate`1[FrooxEngine.ButtonEventHandler]"
        name="HoverLeave"
        content={HoverLeave}
      />
    </component>
  );
};

export default Button;
