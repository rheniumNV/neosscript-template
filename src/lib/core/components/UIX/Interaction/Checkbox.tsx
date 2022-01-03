import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CheckboxInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  State?: member<boolean>;
  TargetState?: member<any>;
  CheckVisual?: member<any>;
}

const Checkbox: FC<CheckboxInput> = (props: CheckboxInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    State,
    TargetState,
    CheckVisual,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.Checkbox"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="State"
        content={State}
      />
      <Member
        type="FrooxEngine.RelayRef`1[FrooxEngine.IField`1[System.Boolean]]"
        name="TargetState"
        content={TargetState}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[System.Boolean]"
        name="CheckVisual"
        content={CheckVisual}
      />
    </component>
  );
};

export default Checkbox;
