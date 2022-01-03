import React from "react";
import Slot from "lib/core/Slot";
import Grabbable from "lib/core/components/Transform/Interaction/Grabbable";
import UIXVertical from "lib/uixHelper/UIXVertical";
import UIXElement from "lib/uixHelper/UIXElement";
import Image from "lib/core/components/UIX/Graphics/Image";
import Text from "lib/core/components/UIX/Graphics/Text";
import UIXCanvas from "lib/uixHelper/UIXCanvas";
import UIXHorizontal from "lib/uixHelper/UIXHorizontal";
import UI_UnlitMaterial from "lib/core/components/Assets/Materials/UI/UI_UnlitMaterial";
import { generateId } from "lib/core/util";
import UIXBackground from "lib/uixHelper/UIXBackground";

export default () => {
  return (
    <Slot name="Item" components={[<Grabbable Scalable={true} />]}>
      <UIXCanvas name="UI" canvas={{ Size: [300, 600] }}>
        <UIXVertical
          templates={[
            [100, "Min"],
            [1, "Flexible"],
            [50, "Min"],
          ]}
        >
          <UIXBackground />
          <UIXElement components={[<Image Tint={[1, 0, 0, 1]} />]}>
            <UIXElement components={[<Text Content={"HelloWorld"} />]} />
          </UIXElement>
          <UIXHorizontal
            templates={[
              [100, "Min"],
              [1, "Flexible"],
            ]}
          >
            <UIXElement components={[<Image Tint={[0, 1, 1, 1]} />]} />
            <UIXElement components={[<Image Tint={[1, 0, 1, 1]} />]} />
          </UIXHorizontal>
          <UIXElement components={[<Image Tint={[0, 0, 1, 1]} />]} />
        </UIXVertical>
      </UIXCanvas>
    </Slot>
  );
};
