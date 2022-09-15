import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TextCountdownClockInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  CountdownTime?: member<number>;
  AllowNegative?: member<boolean>;
  TextTarget?: member<string>;
}

const TextCountdownClock: FC<TextCountdownClockInput> = (
  props: TextCountdownClockInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    CountdownTime,
    AllowNegative,
    TextTarget,
  } = props;

  return (
    <component
      name="FrooxEngine.TextCountdownClock"
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
        type={`FrooxEngine.Sync\`1[System.Double]`}
        name="CountdownTime"
        content={CountdownTime} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowNegative"
        content={AllowNegative} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.String]`}
        name="TextTarget"
        content={TextTarget} /* default: ID0 */
      />
    </component>
  );
};

export default TextCountdownClock;
