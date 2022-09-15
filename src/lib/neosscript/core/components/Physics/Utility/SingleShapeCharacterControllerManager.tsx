import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface SingleShapeCharacterControllerManagerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  UseUserHeadHeightWhenAvailable?: member<boolean>;
  HeadHeightOffset?: member<number>;
  CrouchTargetWidth?: member<number>;
  CrouchStart?: member<number>;
  CrouchEnd?: member<number>;
  DefaultHeight?: member<number>;
  DefaultWidth?: member<number>;
  RootAtBottom?: member<boolean>;
  TargetHeight?: member<any>;
  TargetWidth?: member<any>;
  TargetOffset?: member<any>;
}

const SingleShapeCharacterControllerManager: FC<
  SingleShapeCharacterControllerManagerInput
> = (props: SingleShapeCharacterControllerManagerInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    UseUserHeadHeightWhenAvailable,
    HeadHeightOffset,
    CrouchTargetWidth,
    CrouchStart,
    CrouchEnd,
    DefaultHeight,
    DefaultWidth,
    RootAtBottom,
    TargetHeight,
    TargetWidth,
    TargetOffset,
  } = props;

  return (
    <component
      name="FrooxEngine.SingleShapeCharacterControllerManager"
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
        name="UseUserHeadHeightWhenAvailable"
        content={UseUserHeadHeightWhenAvailable} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HeadHeightOffset"
        content={HeadHeightOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CrouchTargetWidth"
        content={CrouchTargetWidth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CrouchStart"
        content={CrouchStart} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CrouchEnd"
        content={CrouchEnd} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DefaultHeight"
        content={DefaultHeight} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="DefaultWidth"
        content={DefaultWidth} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="RootAtBottom"
        content={RootAtBottom} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="TargetHeight"
        content={TargetHeight} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="TargetWidth"
        content={TargetWidth} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="TargetOffset"
        content={TargetOffset} /* default: ID0 */
      />
    </component>
  );
};

export default SingleShapeCharacterControllerManager;
