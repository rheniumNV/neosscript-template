import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface BoxColliderInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Offset?: member<[number, number, number]>;
  Type?: member<any>;
  Mass?: member<number>;
  CharacterCollider?: member<boolean>;
  IgnoreRaycasts?: member<boolean>;
  Size?: member<[number, number, number]>;
}

const BoxCollider: FC<BoxColliderInput> = (props: BoxColliderInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Offset,
    Type,
    Mass,
    CharacterCollider,
    IgnoreRaycasts,
    Size,
  } = props;

  return (
    <component
      name="FrooxEngine.BoxCollider"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
      version={1}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Offset"
        content={Offset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ColliderType]`}
        name="Type"
        content={Type} /* default: NoCollision */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Mass"
        content={Mass} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="CharacterCollider"
        content={CharacterCollider} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IgnoreRaycasts"
        content={IgnoreRaycasts} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Size"
        content={Size} /* default: [0; 0; 0] */
      />
    </component>
  );
};

export default BoxCollider;
