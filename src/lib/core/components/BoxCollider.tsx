import React, { FC } from "react";
import { member, Member } from "../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface BoxColliderInput {
  persistent?: member<boolean>;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Offset?: member<{ x: number; y: number; z: number }>;
  Type?: member<any>;
  Mass?: member<number>;
  CharacterCollider?: member<boolean>;
  IgnoreRaycasts?: member<boolean>;
  Size?: member<{ x: number; y: number; z: number }>;
}

const BoxCollider: FC<BoxColliderInput> = (props: BoxColliderInput) => {
  const {
    persistent,
    UpdateOrder,
    Enabled,
    Offset,
    Type,
    Mass,
    CharacterCollider,
    IgnoreRaycasts,
    Size,
  } = props;

  return (
    <component name="BoxCollider">
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="persistent"
        content={persistent}
      />
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
        type="FrooxEngine.Sync`1[BaseX.float3]"
        name="Offset"
        content={Offset}
      />
      <Member
        type="FrooxEngine.Sync`1[FrooxEngine.ColliderType]"
        name="Type"
        content={Type}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="Mass"
        content={Mass}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="CharacterCollider"
        content={CharacterCollider}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="IgnoreRaycasts"
        content={IgnoreRaycasts}
      />
      <Member
        type="FrooxEngine.Sync`1[BaseX.float3]"
        name="Size"
        content={Size}
      />
    </component>
  );
};

export default BoxCollider;
