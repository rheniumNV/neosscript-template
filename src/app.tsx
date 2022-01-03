import React from "react";
import Slot from "./lib/core/Slot";
import Grabbable from "./lib/core/components/Transform/Interaction/Grabbable";
import BoxCollider from "./lib/core/components/Physics/Colliders/BoxCollider";

export default () => {
  return (
    <Slot name="Item" components={[<Grabbable Scalable={true} />]}>
      <Slot name="DV"></Slot>
      <Slot
        name="Collider"
        components={[
          <BoxCollider
            Size={[1, 2, 3]}
            CharacterCollider={true}
            Type="Static"
          />,
        ]}
      ></Slot>
    </Slot>
  );
};
