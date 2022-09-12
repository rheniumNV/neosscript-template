import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticCubemapInput {
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
  MaxSize?: member<any>;
}

const StaticCubemap: FC<StaticCubemapInput> = (props: StaticCubemapInput) => {
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
    MaxSize,
  } = props;

  return (
    <component
      name="FrooxEngine.StaticCubemap"
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
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`}
        name="MaxSize"
        content={MaxSize} /* default: <i>null</i> */
      />
    </component>
  );
};

export default StaticCubemap;
