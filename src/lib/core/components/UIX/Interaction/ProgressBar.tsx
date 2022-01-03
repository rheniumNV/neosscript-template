import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ProgressBarInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Progress?: member<number>;
  AnchorMinOffset?: member<any>;
  AnchorMaxOffset?: member<any>;
  AnchorMin?: member<any>;
  AnchorMax?: member<any>;
  Power?: member<number>;
}

const ProgressBar: FC<ProgressBarInput> = (props: ProgressBarInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Progress,
    AnchorMinOffset,
    AnchorMaxOffset,
    AnchorMin,
    AnchorMax,
    Power,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.ProgressBar"
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
        type="FrooxEngine.Sync`1[System.Single]"
        name="Progress"
        content={Progress}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="AnchorMinOffset"
        content={AnchorMinOffset}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="AnchorMaxOffset"
        content={AnchorMaxOffset}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="AnchorMin"
        content={AnchorMin}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float2]"
        name="AnchorMax"
        content={AnchorMax}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Power"
        content={Power}
      />
    </component>
  );
};

export default ProgressBar;
