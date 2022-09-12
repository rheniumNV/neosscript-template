import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface WireframeMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  Thickness?: member<number>;
  ScreenSpace?: member<boolean>;
  LineColor?: member<[number, number, number, number]>;
  FillColor?: member<[number, number, number, number]>;
  InnerLineColor?: member<[number, number, number, number]>;
  InnerFillColor?: member<[number, number, number, number]>;
  UseFresnel?: member<boolean>;
  LineFarColor?: member<[number, number, number, number]>;
  FillFarColor?: member<[number, number, number, number]>;
  InnerLineFarColor?: member<[number, number, number, number]>;
  InnerFillFarColor?: member<[number, number, number, number]>;
  Exp?: member<number>;
  Texture?: member<any>;
  ZWrite?: member<any>;
  DoubleSided?: member<boolean>;
  OffsetFactor?: member<number>;
  OffsetUnits?: member<number>;
  RenderQueue?: member<number>;
  _regular?: member<any>;
  _regularDoubleSided?: member<any>;
}

const WireframeMaterial: FC<WireframeMaterialInput> = (
  props: WireframeMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    Thickness,
    ScreenSpace,
    LineColor,
    FillColor,
    InnerLineColor,
    InnerFillColor,
    UseFresnel,
    LineFarColor,
    FillFarColor,
    InnerLineFarColor,
    InnerFillFarColor,
    Exp,
    Texture,
    ZWrite,
    DoubleSided,
    OffsetFactor,
    OffsetUnits,
    RenderQueue,
    _regular,
    _regularDoubleSided,
  } = props;

  return (
    <component
      name="FrooxEngine.WireframeMaterial"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Thickness"
        content={Thickness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ScreenSpace"
        content={ScreenSpace} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="LineColor"
        content={LineColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FillColor"
        content={FillColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="InnerLineColor"
        content={InnerLineColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="InnerFillColor"
        content={InnerFillColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseFresnel"
        content={UseFresnel} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="LineFarColor"
        content={LineFarColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="FillFarColor"
        content={FillFarColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="InnerLineFarColor"
        content={InnerLineFarColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="InnerFillFarColor"
        content={InnerFillFarColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Exp"
        content={Exp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Texture"
        content={Texture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`}
        name="ZWrite"
        content={ZWrite} /* default: Auto */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DoubleSided"
        content={DoubleSided} /* default: False */
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
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_regular"
        content={_regular} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_regularDoubleSided"
        content={_regularDoubleSided} /* default: ID0 */
      />
    </component>
  );
};

export default WireframeMaterial;
