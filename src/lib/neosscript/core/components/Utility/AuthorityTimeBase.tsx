import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AuthorityTimeBaseInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  BaseSpeed?: member<number>;
  _actualSpeed?: member<number>;
  _actualOffset?: member<number>;
}

const AuthorityTimeBase: FC<AuthorityTimeBaseInput> = (
  props: AuthorityTimeBaseInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    BaseSpeed,
    _actualSpeed,
    _actualOffset,
  } = props;

  return (
    <component
      name="FrooxEngine.AuthorityTimeBase"
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
        name="BaseSpeed"
        content={BaseSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="_actualSpeed"
        content={_actualSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Double]`}
        name="_actualOffset"
        content={_actualOffset} /* default: 0 */
      />
    </component>
  );
};

export default AuthorityTimeBase;
