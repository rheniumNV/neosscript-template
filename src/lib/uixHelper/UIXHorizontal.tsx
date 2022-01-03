import React, { FC } from "react";
import Slot from "lib/core/Slot";
import _ from "lodash";
import LayoutElement from "lib/core/components/UIX/Layout/LayoutElement";
import HorizontalLayout from "lib/core/components/UIX/Layout/HorizontalLayout";

type space = [number, "Min"] | [number, "Preferred"] | [number, "Flexible"];

interface UIXHorizontalInput {
  name?: string;
  templates: Array<space>;
}

const UIXHorizontal: FC<UIXHorizontalInput> = ({
  name = "Horizontal",
  templates,
  children,
}) => {
  return (
    <Slot name={name} components={[<HorizontalLayout />]}>
      {_.map(templates, ([value, type], i) => (
        <Slot
          name="Element"
          components={[<LayoutElement {...{ [type + "Width"]: value }} />]}
        >
          {_.get(children, i, <></>)}
        </Slot>
      ))}
    </Slot>
  );
};

export default UIXHorizontal;
