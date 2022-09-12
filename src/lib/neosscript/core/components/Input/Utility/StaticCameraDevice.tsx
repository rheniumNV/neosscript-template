import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface StaticCameraDeviceInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Owner?: member<any>;
  FieldOfView?: member<number>;
  AspectRatio?: member<number>;
}

const StaticCameraDevice: FC<StaticCameraDeviceInput> = (
  props: StaticCameraDeviceInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Owner,
    FieldOfView,
    AspectRatio,
  } = props;

  return (
    <component
      name="FrooxEngine.StaticCameraDevice"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`}
        name="Owner"
        content={Owner} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FieldOfView"
        content={FieldOfView} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="AspectRatio"
        content={AspectRatio} /* default: 0 */
      />
    </component>
  );
};

export default StaticCameraDevice;
