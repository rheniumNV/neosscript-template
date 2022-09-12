import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Projection360PropertyBlockInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  Texture?: member<any>;
  PerspectiveFieldOfView?: member<[number, number]>;
  PerspectiveAngleOffset?: member<[number, number]>;
}

const Projection360PropertyBlock: FC<Projection360PropertyBlockInput> = (
  props: Projection360PropertyBlockInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    HighPriorityIntegration,
    Texture,
    PerspectiveFieldOfView,
    PerspectiveAngleOffset,
  } = props;

  return (
    <component
      name="FrooxEngine.Projection360PropertyBlock"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`}
        name="Texture"
        content={Texture} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="PerspectiveFieldOfView"
        content={PerspectiveFieldOfView} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="PerspectiveAngleOffset"
        content={PerspectiveAngleOffset} /* default: [0; 0] */
      />
    </component>
  );
};

export default Projection360PropertyBlock;
