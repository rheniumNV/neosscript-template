import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ViolentAprilFoolsExplosionInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  BloatMagnitude?: member<number>;
  _bloatingClip?: member<any>;
  _explosionClip?: member<any>;
}

const ViolentAprilFoolsExplosion: FC<ViolentAprilFoolsExplosionInput> = (
  props: ViolentAprilFoolsExplosionInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    BloatMagnitude,
    _bloatingClip,
    _explosionClip,
  } = props;

  return (
    <component
      name="FrooxEngine.ViolentAprilFoolsExplosion"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="BloatMagnitude"
        content={BloatMagnitude} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`}
        name="_bloatingClip"
        content={_bloatingClip} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`}
        name="_explosionClip"
        content={_explosionClip} /* default: ID0 */
      />
    </component>
  );
};

export default ViolentAprilFoolsExplosion;
