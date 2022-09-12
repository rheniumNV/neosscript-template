import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LightningMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Seed?: member<number>;
  Points?: member<number>;
  Topology?: member<any>;
  Shading?: member<any>;
  Ends?: member<any>;
  DualSided?: member<boolean>;
  Point0?: member<[number, number, number]>;
  Point1?: member<[number, number, number]>;
  StrikeLevels?: member<any>;
}

const LightningMesh: FC<LightningMeshInput> = (props: LightningMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Seed,
    Points,
    Topology,
    Shading,
    Ends,
    DualSided,
    Point0,
    Point1,
    StrikeLevels,
  } = props;

  return (
    <component
      name="FrooxEngine.LightningMesh"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Seed"
        content={Seed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Points"
        content={Points} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Topology]`}
        name="Topology"
        content={Topology} /* default: Circle */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`}
        name="Shading"
        content={Shading} /* default: Smooth */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Ends]`}
        name="Ends"
        content={Ends} /* default: Open */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DualSided"
        content={DualSided} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Point0"
        content={Point0} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Point1"
        content={Point1} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.LightningMesh+StrikeProperties]`}
        name="StrikeLevels"
        content={
          StrikeLevels
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.LightningMesh+StrikeProperties] */
      />
    </component>
  );
};

export default LightningMesh;
