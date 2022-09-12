import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DepthProjectionMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  Color?: member<any>;
  Depth?: member<any>;
  DepthEncoding?: member<any>;
  ColorTextureOffset?: member<[number, number]>;
  ColorTextureScale?: member<[number, number]>;
  DepthTextureOffset?: member<[number, number]>;
  DepthTextureScale?: member<[number, number]>;
  DepthFrom?: member<number>;
  DepthTo?: member<number>;
  FieldOfView?: member<[number, number]>;
  NearClip?: member<number>;
  FarClip?: member<number>;
  DiscardThreshold?: member<number>;
  DiscardOffset?: member<number>;
  BlendMode?: member<any>;
  ZWrite?: member<any>;
}

const DepthProjectionMaterial: FC<DepthProjectionMaterialInput> = (
  props: DepthProjectionMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    Color,
    Depth,
    DepthEncoding,
    ColorTextureOffset,
    ColorTextureScale,
    DepthTextureOffset,
    DepthTextureScale,
    DepthFrom,
    DepthTo,
    FieldOfView,
    NearClip,
    FarClip,
    DiscardThreshold,
    DiscardOffset,
    BlendMode,
    ZWrite,
  } = props;

  return (
    <component
      name="FrooxEngine.DepthProjectionMaterial"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`}
        name="_shader"
        content={_shader} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Color"
        content={Color} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Depth"
        content={Depth} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.DepthEncoding]`}
        name="DepthEncoding"
        content={DepthEncoding} /* default: Grayscale */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ColorTextureOffset"
        content={ColorTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="ColorTextureScale"
        content={ColorTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="DepthTextureOffset"
        content={DepthTextureOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="DepthTextureScale"
        content={DepthTextureScale} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DepthFrom"
        content={DepthFrom} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DepthTo"
        content={DepthTo} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FieldOfView"
        content={FieldOfView} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NearClip"
        content={NearClip} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FarClip"
        content={FarClip} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DiscardThreshold"
        content={DiscardThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DiscardOffset"
        content={DiscardOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`}
        name="BlendMode"
        content={BlendMode} /* default: Opaque */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`}
        name="ZWrite"
        content={ZWrite} /* default: Auto */
      />
    </component>
  );
};

export default DepthProjectionMaterial;
