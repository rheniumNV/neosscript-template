import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ScaleTransitionInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ShowField?: member<boolean>;
  TransitionTimeField?: member<number>;
  ShowScaleField?: member<[number, number, number]>;
  HiddenScaleField?: member<[number, number, number]>;
  CurveField?: member<any>;
  _scaleDrive?: member<any>;
  _enabledDrive?: member<any>;
}

const ScaleTransition: FC<ScaleTransitionInput> = (
  props: ScaleTransitionInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ShowField,
    TransitionTimeField,
    ShowScaleField,
    HiddenScaleField,
    CurveField,
    _scaleDrive,
    _enabledDrive,
  } = props;

  return (
    <component
      name="FrooxEngine.ScaleTransition"
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
        name="ShowField"
        content={ShowField} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="TransitionTimeField"
        content={TransitionTimeField} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="ShowScaleField"
        content={ShowScaleField} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="HiddenScaleField"
        content={HiddenScaleField} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.CurvePreset]`}
        name="CurveField"
        content={CurveField} /* default: Linear */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_scaleDrive"
        content={_scaleDrive} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="_enabledDrive"
        content={_enabledDrive} /* default: ID0 */
      />
    </component>
  );
};

export default ScaleTransition;
