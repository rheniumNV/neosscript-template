import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CurrentDateTimeTextDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Target?: member<string>;
  Format?: member<any>;
  UseUTC?: member<boolean>;
}

const CurrentDateTimeTextDriver: FC<CurrentDateTimeTextDriverInput> = (
  props: CurrentDateTimeTextDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Target,
    Format,
    UseUTC,
  } = props;

  return (
    <component
      name="FrooxEngine.CurrentDateTimeTextDriver"
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
        type={`FrooxEngine.FieldDrive\`1[System.String]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="Format"
        content={Format} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="UseUTC"
        content={UseUTC} /* default: False */
      />
    </component>
  );
};

export default CurrentDateTimeTextDriver;
