import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ScalerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ScaleOffset?: member<[number, number, number]>;
  ScaleMultiplier?: member<[number, number, number]>;
  ScaleSource?: member<any>;
  ScaleMode?: member<any>;
  ScaleSpace?: member<any>;
  scaleTarget?: member<any>;
}

const Scaler: FC<ScalerInput> = (props: ScalerInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ScaleOffset,
    ScaleMultiplier,
    ScaleSource,
    ScaleMode,
    ScaleSpace,
    scaleTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.Scaler"
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
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="ScaleOffset"
        content={ScaleOffset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="ScaleMultiplier"
        content={ScaleMultiplier} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="ScaleSource"
        content={ScaleSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.Scaler+Mode]`}
        name="ScaleMode"
        content={ScaleMode} /* default: FullUniform */
      />
      <Member
        type={`FrooxEngine.RootSpace`}
        name="ScaleSpace"
        content={
          ScaleSpace
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="scaleTarget"
        content={scaleTarget} /* default: ID0 */
      />
    </component>
  );
};

export default Scaler;
