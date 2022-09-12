import React, { FC } from "react";
import _ from "lodash";
import Image from "lib/neoscript/core/components/UIX/Graphics/Image";
import VerticalLayout from "lib/neoscript/core/components/UIX/Layout/VerticalLayout";
import UIXElement from "./UIXElement";
import Mask from "lib/neoscript/core/components/UIX/Graphics/Mask";
import ScrollRect from "lib/neoscript/core/components/UIX/Interaction/ScrollRect";
import ContentSizeFitter from "lib/neoscript/core/components/UIX/Layout/ContentSizeFitter";

interface UIXScrollVerticalInput {
  name?: string;
}

const UIXScrollVertical: FC<UIXScrollVerticalInput> = ({
  name = "ScrollArea",
  children,
}) => {
  return (
    <UIXElement name={name} components={[<Image />, <Mask />]}>
      <UIXElement
        name={"Content"}
        components={[
          <ScrollRect />,
          <VerticalLayout />,
          <ContentSizeFitter VerticalFit={"MinSize"} />,
        ]}
      >
        <UIXElement name="VerticalLayout" components={[<VerticalLayout />]}>
          {children}
        </UIXElement>
      </UIXElement>
    </UIXElement>
  );
};

export default UIXScrollVertical;
