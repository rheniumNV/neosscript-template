import React, { FC } from "react";
import Slot from "lib/core/Slot";
import _ from "lodash";
import LayoutElement from "lib/core/components/UIX/Layout/LayoutElement";
import VerticalLayout from "lib/core/components/UIX/Layout/VerticalLayout";

type space = [number, "Min"] | [number, "Preferred"] | [number, "Flexible"];

interface UIXVerticalInput {
  name?: string;
  templates: Array<space>;
}

const UIXVertical: FC<UIXVerticalInput> = ({
  name = "Vertical",
  templates,
  children,
}) => {
  return (
    <Slot name={name} components={[<VerticalLayout />]}>
      {_.map(templates, ([value, type], i) => (
        <Slot
          name="Element"
          components={[<LayoutElement {...{ [type + "Height"]: value }} />]}
        >
          {_.get(children, i, <></>)}
        </Slot>
      ))}
    </Slot>
  );
};

export default UIXVertical;
