import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SphereAlignerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AutoAddChildren?: member<boolean>;
  Radius?: member<number>;
  DistributionOffset?: member<number>;
  AlignToNormal?: member<boolean>;
  RotationOffset?: member<any>;
  NormalizedStart?: member<number>;
  NormalizedEnd?: member<number>;
  HorizontalStart?: member<number>;
  HorizontalEnd?: member<number>;
  Items?: member<any>;
}

const SphereAligner: FC<SphereAlignerInput> = (props: SphereAlignerInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    AutoAddChildren,
    Radius,
    DistributionOffset,
    AlignToNormal,
    RotationOffset,
    NormalizedStart,
    NormalizedEnd,
    HorizontalStart,
    HorizontalEnd,
    Items,
  } = props;

  return (
    <component
      name="FrooxEngine.SphereAligner"
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
        name="AutoAddChildren"
        content={AutoAddChildren} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Radius"
        content={Radius} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DistributionOffset"
        content={DistributionOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AlignToNormal"
        content={AlignToNormal} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="RotationOffset"
        content={RotationOffset} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalizedStart"
        content={NormalizedStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="NormalizedEnd"
        content={NormalizedEnd} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HorizontalStart"
        content={HorizontalStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HorizontalEnd"
        content={HorizontalEnd} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.SphereAligner+Item]`}
        name="Items"
        content={
          Items
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.SphereAligner+Item] */
      />
    </component>
  );
};

export default SphereAligner;
