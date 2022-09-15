import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

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
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Font?: member<any>;
  Content?: member<any>;
  ParseRichText?: member<boolean>;
  NullContent?: member<any>;
  Size?: member<number>;
  HorizontalAlign?: member<any>;
  VerticalAlign?: member<any>;
  AlignmentMode?: member<any>;
  Color?: member<[number, number, number, number]>;
  Materials?: member<Array<{ ID: string; Data: string }>>;
  LineHeight?: member<number>;
  MaskPattern?: member<any>;
  HorizontalAutoSize?: member<boolean>;
  VerticalAutoSize?: member<boolean>;
  AutoSizeMin?: member<number>;
  AutoSizeMax?: member<number>;
  CaretPosition?: member<number>;
  SelectionStart?: member<number>;
  CaretColor?: member<[number, number, number, number]>;
  SelectionColor?: member<[number, number, number, number]>;
  InteractionTarget?: member<boolean>;
  _legacyFontMaterial?: member<any>;
  _legacyAlign?: member<any>;
}

const Text: FC<TextInput> = (props: TextInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
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
    Materials,
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
    <component
      name="FrooxEngine.UIX.Text"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
      version={1}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.FontSet]`}
        name="Font"
        content={Font} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Content"
        content={Content} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ParseRichText"
        content={ParseRichText} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="NullContent"
        content={NullContent} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Size"
        content={Size} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[CodeX.TextHorizontalAlignment]`}
        name="HorizontalAlign"
        content={HorizontalAlign} /* default: Left */
      />
      <Member
        type={`FrooxEngine.Sync\`1[CodeX.TextVerticalAlignment]`}
        name="VerticalAlign"
        content={VerticalAlign} /* default: Top */
      />
      <Member
        type={`FrooxEngine.Sync\`1[CodeX.AlignmentMode]`}
        name="AlignmentMode"
        content={AlignmentMode} /* default: Geometric */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Color"
        content={Color} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]`}
        name="Materials"
        content={
          Materials
        } /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.Material] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LineHeight"
        content={LineHeight} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="MaskPattern"
        content={MaskPattern} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HorizontalAutoSize"
        content={HorizontalAutoSize} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="VerticalAutoSize"
        content={VerticalAutoSize} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AutoSizeMin"
        content={AutoSizeMin} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AutoSizeMax"
        content={AutoSizeMax} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="CaretPosition"
        content={CaretPosition} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="SelectionStart"
        content={SelectionStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="CaretColor"
        content={CaretColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SelectionColor"
        content={SelectionColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="InteractionTarget"
        content={InteractionTarget} /* default: False */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.FontMaterial]`}
        name="_legacyFontMaterial"
        content={_legacyFontMaterial} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.Alignment]`}
        name="_legacyAlign"
        content={_legacyAlign} /* default: TopLeft */
      />
    </component>
  );
};

export default Text;
