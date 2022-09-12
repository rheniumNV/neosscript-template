import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TubeWireMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Point0?: member<[number, number, number]>;
  Point1?: member<[number, number, number]>;
  Tangent0?: member<[number, number, number]>;
  Tangent1?: member<[number, number, number]>;
  Orientation0?: member<any>;
  Orientation1?: member<any>;
  Steps?: member<number>;
  Exp?: member<number>;
  Radius0?: member<number>;
  Radius1?: member<number>;
  Ends?: member<any>;
  Shading?: member<any>;
  Points?: member<number>;
}

const TubeWireMesh: FC<TubeWireMeshInput> = (props: TubeWireMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Point0,
    Point1,
    Tangent0,
    Tangent1,
    Orientation0,
    Orientation1,
    Steps,
    Exp,
    Radius0,
    Radius1,
    Ends,
    Shading,
    Points,
  } = props;

  return (
    <component
      name="FrooxEngine.TubeWireMesh"
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
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Tangent0"
        content={Tangent0} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Tangent1"
        content={Tangent1} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="Orientation0"
        content={Orientation0} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="Orientation1"
        content={Orientation1} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Steps"
        content={Steps} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Exp"
        content={Exp} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Radius0"
        content={Radius0} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Radius1"
        content={Radius1} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Ends]`}
        name="Ends"
        content={Ends} /* default: Open */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`}
        name="Shading"
        content={Shading} /* default: Smooth */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Points"
        content={Points} /* default: 0 */
      />
    </component>
  );
};

export default TubeWireMesh;
