import React, { FC } from "react";
import _ from "lodash";
import Image from "../core/components/UIX/Graphics/Image";
import VerticalLayout from "../core/components/UIX/Layout/VerticalLayout";
import UIXElement from "./UIXElement";
import Mask from "../core/components/UIX/Graphics/Mask";
import ScrollRect from "../core/components/UIX/Interaction/ScrollRect";
import ContentSizeFitter from "../core/components/UIX/Layout/ContentSizeFitter";

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
