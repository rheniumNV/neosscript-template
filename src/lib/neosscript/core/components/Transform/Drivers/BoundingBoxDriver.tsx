import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BoundingBoxDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  BoundedSource?: member<any>;
  Size?: member<any>;
  Center?: member<any>;
  Padding?: member<[number, number, number]>;
  Scale?: member<[number, number, number]>;
}

const BoundingBoxDriver: FC<BoundingBoxDriverInput> = (
  props: BoundingBoxDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    BoundedSource,
    Size,
    Center,
    Padding,
    Scale,
  } = props;

  return (
    <component
      name="FrooxEngine.BoundingBoxDriver"
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.IBounded]`}
        name="BoundedSource"
        content={BoundedSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="Size"
        content={Size} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="Center"
        content={Center} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Padding"
        content={Padding} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Scale"
        content={Scale} /* default: [0; 0; 0] */
      />
    </component>
  );
};

export default BoundingBoxDriver;
