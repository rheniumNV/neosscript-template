import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TextInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Font?: member<any>;
  Content?: member<any>;
  ParseRichText?: member<boolean>;
  NullContent?: member<any>;
  Size?: member<number>;
  HorizontalAlign?: member<any>;
  VerticalAlign?: member<any>;
  AlignmentMode?: member<any>;
  Color?: member<any>;
  LineHeight?: member<number>;
  MaskPattern?: member<any>;
  HorizontalAutoSize?: member<boolean>;
  VerticalAutoSize?: member<boolean>;
  AutoSizeMin?: member<number>;
  AutoSizeMax?: member<number>;
  CaretPosition?: member<number>;
  SelectionStart?: member<number>;
  CaretColor?: member<any>;
  SelectionColor?: member<any>;
  InteractionTarget?: member<boolean>;
  _legacyFontMaterial?: member<any>;
  _legacyAlign?: member<any>;
}

const Text: FC<TextInput> = (props: TextInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Font,
    Content,
    ParseRichText,
    NullContent,
    Size,
    HorizontalAlign,
    VerticalAlign,
    AlignmentMode,
    Color,
    LineHeight,
    MaskPattern,
    HorizontalAutoSize,
    VerticalAutoSize,
    AutoSizeMin,
    AutoSizeMax,
    CaretPosition,
    SelectionStart,
    CaretColor,
    SelectionColor,
    InteractionTarget,
    _legacyFontMaterial,
    _legacyAlign,
  } = props;

  return (
    <component name="FrooxEngine.UIX.Text" id={id} persistentId={persistentId}>
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
        type="FrooxEngine.AssetRef`1[FrooxEngine.FontSet]"
        name="Font"
        content={Font}
      />
      <Member
        type="FrooxEngine.Sync`1[System.String]"
        name="Content"
        content={Content}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="ParseRichText"
        content={ParseRichText}
      />
      <Member
        type="FrooxEngine.Sync`1[System.String]"
        name="NullContent"
        content={NullContent}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Size"
        content={Size}
      />
      <Member
        type="FrooxEngine.Sync`1[CodeX.TextHorizontalAlignment]"
        name="HorizontalAlign"
        content={HorizontalAlign}
      />
      <Member
        type="FrooxEngine.Sync`1[CodeX.TextVerticalAlignment]"
        name="VerticalAlign"
        content={VerticalAlign}
      />
      <Member
        type="FrooxEngine.Sync`1[CodeX.AlignmentMode]"
        name="AlignmentMode"
        content={AlignmentMode}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="Color"
        content={Color}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="LineHeight"
        content={LineHeight}
      />
      <Member
        type="FrooxEngine.Sync`1[System.String]"
        name="MaskPattern"
        content={MaskPattern}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="HorizontalAutoSize"
        content={HorizontalAutoSize}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="VerticalAutoSize"
        content={VerticalAutoSize}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="AutoSizeMin"
        content={AutoSizeMin}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="AutoSizeMax"
        content={AutoSizeMax}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="CaretPosition"
        content={CaretPosition}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="SelectionStart"
        content={SelectionStart}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="CaretColor"
        content={CaretColor}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.color]"
        name="SelectionColor"
        content={SelectionColor}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="InteractionTarget"
        content={InteractionTarget}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.FontMaterial]"
        name="_legacyFontMaterial"
        content={_legacyFontMaterial}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.Alignment]"
        name="_legacyAlign"
        content={_legacyAlign}
      />
    </component>
  );
};

export default Text;
