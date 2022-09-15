import React, { FC } from "react";
import Slot from "lib/neosscript/core/Slot";
import _ from "lodash";
import LayoutElement from "lib/neosscript/core/components/UIX/Layout/LayoutElement";
import VerticalLayout, {
  VerticalLayoutInput,
} from "lib/neosscript/core/components/UIX/Layout/VerticalLayout";

type space = [number, "Min"] | [number, "Preferred"] | [number, "Flexible"];

interface UIXVerticalInput {
  name?: string;
  layout?: VerticalLayoutInput;
  templates: Array<space>;
}

const UIXVertical: FC<UIXVerticalInput> = ({
  name = "Vertical",
  layout = {},
  templates,
  children,
}) => {
  return (
    <Slot name={name} components={[<VerticalLayout {...layout} />]}>
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
