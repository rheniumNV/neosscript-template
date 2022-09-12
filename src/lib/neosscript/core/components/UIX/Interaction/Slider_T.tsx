import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Slider_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  BaseColor?: member<[number, number, number, number]>;
  __legacy_NormalColor?: member<[number, number, number, number]>;
  __legacy_HighlightColor?: member<[number, number, number, number]>;
  __legacy_PressColor?: member<[number, number, number, number]>;
  __legacy_DisabledColor?: member<[number, number, number, number]>;
  __legacy_TintColorMode?: member<any>;
  __legacy_ColorDrive?: member<any>;
  IsPressed?: member<boolean>;
  IsHovering?: member<boolean>;
  Value?: member<any>;
  Min?: member<any>;
  Max?: member<any>;
  Integers?: member<boolean>;
  Power?: member<number>;
  VibrationThreshold?: member<any>;
  SlideDirection?: member<any>;
  AnchorOffset?: member<[number, number]>;
  HandleAnchorMinDrive?: member<any>;
  HandleAnchorMaxDrive?: member<any>;
}

const Slider_T: FC<Slider_TInput> = (props: Slider_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
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
    Value,
    Min,
    Max,
    Integers,
    Power,
    VibrationThreshold,
    SlideDirection,
    AnchorOffset,
    HandleAnchorMinDrive,
    HandleAnchorMaxDrive,
  } = props;

  return (
    <component
      name={`FrooxEngine.UIX.Slider\`1[${[T]}]`}
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
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="BaseColor"
        content={BaseColor} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="__legacy_NormalColor"
        content={__legacy_NormalColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="__legacy_HighlightColor"
        content={__legacy_HighlightColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="__legacy_PressColor"
        content={__legacy_PressColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="__legacy_DisabledColor"
        content={__legacy_DisabledColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.InteractionElement+ColorMode]`}
        name="__legacy_TintColorMode"
        content={__legacy_TintColorMode} /* default: Explicit */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.color]`}
        name="__legacy_ColorDrive"
        content={__legacy_ColorDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IsPressed"
        content={IsPressed} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IsHovering"
        content={IsHovering} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Value"
        content={Value} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Min"
        content={Min} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="Max"
        content={Max} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Integers"
        content={Integers} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Power"
        content={Power} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[${T}]`}
        name="VibrationThreshold"
        content={VibrationThreshold} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.Slider\`1+Direction[${T}]]`}
        name="SlideDirection"
        content={SlideDirection} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="AnchorOffset"
        content={AnchorOffset} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="HandleAnchorMinDrive"
        content={HandleAnchorMinDrive} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="HandleAnchorMaxDrive"
        content={HandleAnchorMaxDrive} /* default: null */
      />
    </component>
  );
};

export default Slider_T;
