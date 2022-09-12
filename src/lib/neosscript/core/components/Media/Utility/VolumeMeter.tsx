import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VolumeMeterInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Volume?: member<any>;
  Smoothing?: member<number>;
  Power?: member<number>;
  Source?: member<any>;
}

const VolumeMeter: FC<VolumeMeterInput> = (props: VolumeMeterInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Volume,
    Smoothing,
    Power,
    Source,
  } = props;

  return (
    <component
      name="FrooxEngine.VolumeMeter"
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
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="Volume"
        content={Volume} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothing"
        content={Smoothing} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Power"
        content={Power} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAudioSource]`}
        name="Source"
        content={Source} /* default: ID0 */
      />
    </component>
  );
};

export default VolumeMeter;
