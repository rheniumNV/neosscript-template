import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ProceduralSkyMaterialInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  _shader?: member<any>;
  SunQuality?: member<any>;
  SunSize?: member<number>;
  Sun?: member<any>;
  AtmosphereThickness?: member<number>;
  SkyTint?: member<[number, number, number, number]>;
  GroundColor?: member<[number, number, number, number]>;
  Exposure?: member<number>;
}

const ProceduralSkyMaterial: FC<ProceduralSkyMaterialInput> = (
  props: ProceduralSkyMaterialInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    _shader,
    SunQuality,
    SunSize,
    Sun,
    AtmosphereThickness,
    SkyTint,
    GroundColor,
    Exposure,
  } = props;

  return (
    <component
      name="FrooxEngine.ProceduralSkyMaterial"
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
        type={`FrooxEngine.Sync\`1[FrooxEngine.ProceduralSkyMaterial+SunType]`}
        name="SunQuality"
        content={SunQuality} /* default: None */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SunSize"
        content={SunSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.Light]`}
        name="Sun"
        content={Sun} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AtmosphereThickness"
        content={AtmosphereThickness} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SkyTint"
        content={SkyTint} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="GroundColor"
        content={GroundColor} /* default: [0; 0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Exposure"
        content={Exposure} /* default: 0 */
      />
    </component>
  );
};

export default ProceduralSkyMaterial;
