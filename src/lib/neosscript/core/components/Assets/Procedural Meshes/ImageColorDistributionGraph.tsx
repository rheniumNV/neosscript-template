import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ImageColorDistributionGraphInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Texture?: member<any>;
  ColorSpace?: member<any>;
  MaxTextureSize?: member<number>;
  BaseSize?: member<number>;
  AccumulateSize?: member<number>;
  MaxSize?: member<number>;
  Scale?: member<[number, number, number]>;
  AlphaThreshold?: member<number>;
}

const ImageColorDistributionGraph: FC<ImageColorDistributionGraphInput> = (
  props: ImageColorDistributionGraphInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Texture,
    ColorSpace,
    MaxTextureSize,
    BaseSize,
    AccumulateSize,
    MaxSize,
    Scale,
    AlphaThreshold,
  } = props;

  return (
    <component
      name="FrooxEngine.ImageColorDistributionGraph"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="OverrideBoundingBox"
        content={OverrideBoundingBox} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`}
        name="OverridenBoundingBox"
        content={
          OverridenBoundingBox
        } /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`}
        name="Texture"
        content={Texture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ImageColorDistributionGraph+Space]`}
        name="ColorSpace"
        content={ColorSpace} /* default: RGB */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="MaxTextureSize"
        content={MaxTextureSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BaseSize"
        content={BaseSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AccumulateSize"
        content={AccumulateSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxSize"
        content={MaxSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Scale"
        content={Scale} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AlphaThreshold"
        content={AlphaThreshold} /* default: 0 */
      />
    </component>
  );
};

export default ImageColorDistributionGraph;
