import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface IcoSphereMeshInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  OverrideBoundingBox?: member<boolean>;
  OverridenBoundingBox?: member<any>;
  Radius?: member<number>;
  Subdivisions?: member<number>;
  FlatShading?: member<boolean>;
  FlatFaceExtrude?: member<number>;
  FlatFaceScale?: member<number>;
}

const IcoSphereMesh: FC<IcoSphereMeshInput> = (props: IcoSphereMeshInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    OverrideBoundingBox,
    OverridenBoundingBox,
    Radius,
    Subdivisions,
    FlatShading,
    FlatFaceExtrude,
    FlatFaceScale,
  } = props;

  return (
    <component
      name="FrooxEngine.IcoSphereMesh"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Radius"
        content={Radius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="Subdivisions"
        content={Subdivisions} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="FlatShading"
        content={FlatShading} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FlatFaceExtrude"
        content={FlatFaceExtrude} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FlatFaceScale"
        content={FlatFaceScale} /* default: 0 */
      />
    </component>
  );
};

export default IcoSphereMesh;
