import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticTexture2DInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  URL?: member<any>;
  FilterMode?: member<any>;
  AnisotropicLevel?: member<number>;
  Uncompressed?: member<boolean>;
  DirectLoad?: member<boolean>;
  ForceExactVariant?: member<boolean>;
  PreferredFormat?: member<any>;
  MipMapBias?: member<number>;
  IsNormalMap?: member<boolean>;
  WrapModeU?: member<any>;
  WrapModeV?: member<any>;
  PowerOfTwoAlignThreshold?: member<number>;
  CrunchCompressed?: member<boolean>;
  MaxSize?: member<any>;
  MipMaps?: member<boolean>;
  MipMapFilter?: member<any>;
  Readable?: member<boolean>;
}

const StaticTexture2D: FC<StaticTexture2DInput> = (
  props: StaticTexture2DInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    URL,
    FilterMode,
    AnisotropicLevel,
    Uncompressed,
    DirectLoad,
    ForceExactVariant,
    PreferredFormat,
    MipMapBias,
    IsNormalMap,
    WrapModeU,
    WrapModeV,
    PowerOfTwoAlignThreshold,
    CrunchCompressed,
    MaxSize,
    MipMaps,
    MipMapFilter,
    Readable,
  } = props;

  return (
    <component
      name="FrooxEngine.StaticTexture2D"
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
        type={`FrooxEngine.Sync\`1[System.Uri]`}
        name="URL"
        content={URL} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`}
        name="FilterMode"
        content={FilterMode} /* default: Point */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="AnisotropicLevel"
        content={AnisotropicLevel} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Uncompressed"
        content={Uncompressed} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DirectLoad"
        content={DirectLoad} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ForceExactVariant"
        content={ForceExactVariant} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[CodeX.TextureCompression]]`}
        name="PreferredFormat"
        content={PreferredFormat} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MipMapBias"
        content={MipMapBias} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IsNormalMap"
        content={IsNormalMap} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`}
        name="WrapModeU"
        content={WrapModeU} /* default: Repeat */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`}
        name="WrapModeV"
        content={WrapModeV} /* default: Repeat */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PowerOfTwoAlignThreshold"
        content={PowerOfTwoAlignThreshold} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CrunchCompressed"
        content={CrunchCompressed} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`}
        name="MaxSize"
        content={MaxSize} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="MipMaps"
        content={MipMaps} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[CodeX.Filtering]`}
        name="MipMapFilter"
        content={MipMapFilter} /* default: Bilinear */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Readable"
        content={Readable} /* default: False */
      />
    </component>
  );
};

export default StaticTexture2D;
