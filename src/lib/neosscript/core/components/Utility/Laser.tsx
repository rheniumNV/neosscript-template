import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LaserInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _material?: member<any>;
  _rayDriver?: member<any>;
  _meshRenderer?: member<any>;
}

const Laser: FC<LaserInput> = (props: LaserInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _material,
    _rayDriver,
    _meshRenderer,
  } = props;

  return (
    <component
      name="FrooxEngine.Laser"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_RimMetallic]`}
        name="_material"
        content={_material} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.RayDriver]`}
        name="_rayDriver"
        content={_rayDriver} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`}
        name="_meshRenderer"
        content={_meshRenderer} /* default: ID0 */
      />
    </component>
  );
};

export default Laser;
