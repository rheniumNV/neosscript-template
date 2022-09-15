import React, { FC } from "react";
import Slot from "lib/neosscript/core/Slot";
import _ from "lodash";
import LayoutElement from "lib/neosscript/core/components/UIX/Layout/LayoutElement";
import HorizontalLayout, {
  HorizontalLayoutInput,
} from "lib/neosscript/core/components/UIX/Layout/HorizontalLayout";

type space = [number, "Min"] | [number, "Preferred"] | [number, "Flexible"];

interface UIXHorizontalInput {
  name?: string;
  layout?: HorizontalLayoutInput;
  templates: Array<space>;
}

const UIXHorizontal: FC<UIXHorizontalInput> = ({
  name = "Horizontal",
  layout = {},
  templates,
  children,
}) => {
  return (
    <Slot name={name} components={[<HorizontalLayout {...layout} />]}>
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
