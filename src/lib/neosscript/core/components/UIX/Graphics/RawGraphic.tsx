import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface RawGraphicInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Material?: member<any>;
  PropertyBlock?: member<any>;
  FillRect?: member<any>;
  Color?: member<[number, number, number, number]>;
  UVRect?: member<any>;
  Orientation?: member<any>;
  Normal?: member<any>;
  Tangent?: member<any>;
  HideWithNoMaterial?: member<boolean>;
  PreserveUVAspectRatio?: member<boolean>;
  InteractionTarget?: member<boolean>;
}

const RawGraphic: FC<RawGraphicInput> = (props: RawGraphicInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Material,
    PropertyBlock,
    FillRect,
    Color,
    UVRect,
    Orientation,
    Normal,
    Tangent,
    HideWithNoMaterial,
    PreserveUVAspectRatio,
    InteractionTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.RawGraphic"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`}
        name="Material"
        content={Material} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.MaterialPropertyBlock]`}
        name="PropertyBlock"
        content={PropertyBlock} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.Rect]`}
        name="FillRect"
        content={FillRect} /* default: [X=0; Y=0; W=0; H=0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="Color"
        content={Color} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.Rect]`}
        name="UVRect"
        content={UVRect} /* default: [X=0; Y=0; W=0; H=0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.RectOrientation]`}
        name="Orientation"
        content={Orientation} /* default: Default */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`}
        name="Normal"
        content={Normal} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float4]]`}
        name="Tangent"
        content={Tangent} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HideWithNoMaterial"
        content={HideWithNoMaterial} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="PreserveUVAspectRatio"
        content={PreserveUVAspectRatio} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="InteractionTarget"
        content={InteractionTarget} /* default: False */
      />
    </component>
  );
};

export default RawGraphic;
