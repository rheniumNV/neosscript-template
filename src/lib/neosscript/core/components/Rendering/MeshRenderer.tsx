import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MeshRendererInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Mesh?: member<any>;
  Materials?: member<Array<{ ID: string; Data: string }>>;
  MaterialPropertyBlocks?: member<any>;
  ShadowCastMode?: member<any>;
  MotionVectorMode?: member<any>;
  SortingOrder?: member<number>;
}

const MeshRenderer: FC<MeshRendererInput> = (props: MeshRendererInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Mesh,
    Materials,
    MaterialPropertyBlocks,
    ShadowCastMode,
    MotionVectorMode,
    SortingOrder,
  } = props;

  return (
    <component
      name="FrooxEngine.MeshRenderer"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`}
        name="Mesh"
        content={Mesh} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]`}
        name="Materials"
        content={
          Materials
        } /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.Material] */
      />
      <Member
        type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.MaterialPropertyBlock]`}
        name="MaterialPropertyBlocks"
        content={
          MaterialPropertyBlocks
        } /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.MaterialPropertyBlock] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ShadowCastMode]`}
        name="ShadowCastMode"
        content={ShadowCastMode} /* default: Off */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.MotionVectorMode]`}
        name="MotionVectorMode"
        content={MotionVectorMode} /* default: Camera */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="SortingOrder"
        content={SortingOrder} /* default: 0 */
      />
    </component>
  );
};

export default MeshRenderer;
