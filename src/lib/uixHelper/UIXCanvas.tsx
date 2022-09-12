import React, { FC } from "react";
import Slot from "lib/neosscript/core/Slot";
import _ from "lodash";
import Canvas, { CanvasInput } from "lib/neosscript/core/components/UIX/Canvas";
import BoxCollider from "lib/neosscript/core/components/Physics/Colliders/BoxCollider";
import { generateId } from "lib/neosscript/util";

interface UIXCanvasInput {
  name?: string;
  canvas: CanvasInput;
}

const UIXCanvas: FC<UIXCanvasInput> = ({
  name = "Canvas",
  canvas,
  children,
}) => {
  const colliderId = generateId();
  const colliderSizeId = generateId();
  const colliderOffsetId = generateId();

  return (
    <Slot
      name={name}
      scale={[0.001, 0.001, 0.001]}
      components={[
        <Canvas
          {...{
            ...canvas,
            ...{
              Collider: colliderId,
              _colliderSize: colliderSizeId,
              _colliderOffset: colliderOffsetId,
            },
          }}
        />,
        <BoxCollider
          id={colliderId}
          Size={{ value: [1, 1, 1], id: colliderSizeId }}
          Offset={{ value: [0, 0, 0], id: colliderOffsetId }}
        />,
      ]}
    >
      {children}
    </Slot>
  );
};

export default UIXCanvas;
