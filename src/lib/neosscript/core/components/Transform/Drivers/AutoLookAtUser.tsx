import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AutoLookAtUserInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  RetargetDistance?: member<number>;
  LerpSpeed?: member<number>;
  TargetedUser?: member<any>;
  AutoTarget?: member<boolean>;
  ExcludeActiveUser?: member<boolean>;
  SwingReference?: member<[number, number, number]>;
  TwistReference?: member<[number, number, number]>;
  MaxSwing?: member<number>;
  MaxTwist?: member<number>;
  _rotation?: member<any>;
}

const AutoLookAtUser: FC<AutoLookAtUserInput> = (
  props: AutoLookAtUserInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    RetargetDistance,
    LerpSpeed,
    TargetedUser,
    AutoTarget,
    ExcludeActiveUser,
    SwingReference,
    TwistReference,
    MaxSwing,
    MaxTwist,
    _rotation,
  } = props;

  return (
    <component
      name="FrooxEngine.AutoLookAtUser"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="RetargetDistance"
        content={RetargetDistance} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LerpSpeed"
        content={LerpSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`}
        name="TargetedUser"
        content={TargetedUser} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoTarget"
        content={AutoTarget} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ExcludeActiveUser"
        content={ExcludeActiveUser} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="SwingReference"
        content={SwingReference} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="TwistReference"
        content={TwistReference} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxSwing"
        content={MaxSwing} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="MaxTwist"
        content={MaxTwist} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotation"
        content={_rotation} /* default: ID0 */
      />
    </component>
  );
};

export default AutoLookAtUser;
