import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ProgressBarInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Progress?: member<number>;
  AnchorMinOffset?: member<[number, number]>;
  AnchorMaxOffset?: member<[number, number]>;
  AnchorMin?: member<any>;
  AnchorMax?: member<any>;
  Power?: member<number>;
}

const ProgressBar: FC<ProgressBarInput> = (props: ProgressBarInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
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
        name="Progress"
        content={Progress} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="AnchorMinOffset"
        content={AnchorMinOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="AnchorMaxOffset"
        content={AnchorMaxOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="AnchorMin"
        content={AnchorMin} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`}
        name="AnchorMax"
        content={AnchorMax} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Power"
        content={Power} /* default: 0 */
      />
    </component>
  );
};

export default ProgressBar;
