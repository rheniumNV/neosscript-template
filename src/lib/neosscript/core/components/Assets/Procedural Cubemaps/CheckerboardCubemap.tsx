import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CheckerboardCubemapInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  FilterMode?: member<any>;
  AnisotropicLevel?: member<number>;
  MipmapBias?: member<number>;
  Size?: member<number>;
  Mipmaps?: member<boolean>;
  Format?: member<any>;
  CheckerSize?: member<number>;
  PosX_Color0?: member<[number, number, number, number]>;
  PosX_Color1?: member<[number, number, number, number]>;
  NegX_Color0?: member<[number, number, number, number]>;
  NegX_Color1?: member<[number, number, number, number]>;
  PosY_Color0?: member<[number, number, number, number]>;
  PosY_Color1?: member<[number, number, number, number]>;
  NegY_Color0?: member<[number, number, number, number]>;
  NegY_Color1?: member<[number, number, number, number]>;
  PosZ_Color0?: member<[number, number, number, number]>;
  PosZ_Color1?: member<[number, number, number, number]>;
  NegZ_Color0?: member<[number, number, number, number]>;
  NegZ_Color1?: member<[number, number, number, number]>;
}

const CheckerboardCubemap: FC<CheckerboardCubemapInput> = (
  props: CheckerboardCubemapInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    FilterMode,
    AnisotropicLevel,
    MipmapBias,
    Size,
    Mipmaps,
    Format,
    CheckerSize,
    PosX_Color0,
    PosX_Color1,
    NegX_Color0,
    NegX_Color1,
    PosY_Color0,
    PosY_Color1,
    NegY_Color0,
    NegY_Color1,
    PosZ_Color0,
    PosZ_Color1,
    NegZ_Color0,
    NegZ_Color1,
  } = props;

  return (
    <component
      name="FrooxEngine.CheckerboardCubemap"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MipmapBias"
        content={MipmapBias} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Size"
        content={Size} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Mipmaps"
        content={Mipmaps} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[CodeX.TextureFormat]`}
        name="Format"
        content={Format} /* default: Unknown */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="CheckerSize"
        content={CheckerSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="PosX_Color0"
        content={PosX_Color0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="PosX_Color1"
        content={PosX_Color1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NegX_Color0"
        content={NegX_Color0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NegX_Color1"
        content={NegX_Color1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="PosY_Color0"
        content={PosY_Color0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="PosY_Color1"
        content={PosY_Color1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NegY_Color0"
        content={NegY_Color0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NegY_Color1"
        content={NegY_Color1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="PosZ_Color0"
        content={PosZ_Color0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="PosZ_Color1"
        content={PosZ_Color1} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NegZ_Color0"
        content={NegZ_Color0} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="NegZ_Color1"
        content={NegZ_Color1} /* default: [0; 0; 0; 0] */
      />
    </component>
  );
};

export default CheckerboardCubemap;
