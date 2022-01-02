import React from "react";
import Slot from "./lib/core/Slot";
import Grabbable from "./lib/core/components/grabbable";
import BoxCollider from "./lib/core/components/BoxCollider";

export default () => {
  return (
    <Slot name="Item" components={[<Grabbable Scalable={true} />]}>
      <Slot
        name="Collider"
        components={[
          <BoxCollider Size={{ x: 1, y: 2, z: 3 }} CharacterCollider={true} />,
        ]}
      ></Slot>
    </Slot>
  );
};
