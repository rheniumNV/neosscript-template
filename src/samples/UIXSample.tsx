import React from "react";
import Slot from "lib/neosscript/core/Slot";
import Grabbable from "lib/neosscript/core/components/Transform/Interaction/Grabbable";
import UIXVertical from "lib/uixHelper/UIXVertical";
import UIXElement from "lib/uixHelper/UIXElement";
import Image from "lib/neosscript/core/components/UIX/Graphics/Image";
import Text from "lib/neosscript/core/components/UIX/Graphics/Text";
import UIXCanvas from "lib/uixHelper/UIXCanvas";
import UIXHorizontal from "lib/uixHelper/UIXHorizontal";
import UIXBackground from "lib/uixHelper/UIXBackground";

export default () => {
  return (
    <Slot name="Item" components={[<Grabbable Scalable={true} />]}>
      <UIXCanvas name="UI" canvas={{ Size: [300, 600] }}>
        <UIXBackground />
        <UIXVertical
          layout={{
            PaddingBottom: 10,
            PaddingLeft: 10,
            PaddingRight: 10,
            PaddingTop: 10,
            Spacing: 5,
          }}
          templates={[
            [100, "Min"],
            [1, "Flexible"],
            [50, "Min"],
          ]}
        >
          <UIXElement components={[<Image Tint={[1, 0, 0, 1]} />]}>
            <UIXElement components={[<Text Content={"HelloWorld"} />]} />
          </UIXElement>
          <UIXHorizontal
            layout={{ Spacing: 5 }}
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
