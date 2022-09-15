import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CameraFrustumMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Orientation?: member<any>;
  Near?: member<number>;
  Far?: member<number>;
  HorizontalAngle?: member<number>;
  VerticalAngle?: member<number>;
  DualSided?: member<boolean>;
  NearCap?: member<boolean>;
  FarCap?: member<boolean>;
}

const CameraFrustumMesh: FC<CameraFrustumMeshInput> = (
  props: CameraFrustumMeshInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Orientation,
    Near,
    Far,
    HorizontalAngle,
    VerticalAngle,
    DualSided,
    NearCap,
    FarCap,
  } = props;

  return (
    <component
      name="FrooxEngine.CameraFrustumMesh"
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
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="Orientation"
        content={Orientation} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Near"
        content={Near} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Far"
        content={Far} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HorizontalAngle"
        content={HorizontalAngle} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="VerticalAngle"
        content={VerticalAngle} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="DualSided"
        content={DualSided} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="NearCap"
        content={NearCap} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="FarCap"
        content={FarCap} /* default: False */
      />
    </component>
  );
};

export default CameraFrustumMesh;
