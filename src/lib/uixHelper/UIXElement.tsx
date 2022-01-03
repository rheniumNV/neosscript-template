import React, { FC } from "react";
import Slot from "lib/core/Slot";
import ReactTransform from "lib/core/components/UIX/RectTransform";
import LayoutElement, {
  LayoutElementInput,
} from "lib/core/components/UIX/Layout/LayoutElement";

interface UIXElementInput {
  name?: string;
  layout?: LayoutElementInput;
  components?: Array<JSX.Element>;
}

const UIXElement: FC<UIXElementInput> = ({
  name = "Element",
  components = [],
  children,
  layout,
}) => {
  return (
    <Slot
      name={name}
      components={[
        <ReactTransform />,
        ...(layout ? [] : [<LayoutElement {...layout} />]),
        ...components,
      ]}
    >
      {children}
    </Slot>
  );
};

export default UIXElement;
