import React, { FC } from "react";
import Image from "lib/core/components/UIX/Graphics/Image";
import UI_UnlitMaterial from "lib/core/components/Assets/Materials/UI/UI_UnlitMaterial";
import UIXElement from "lib/uixHelper/UIXElement";
import { generateId } from "lib/core/util";

interface UIXBackgroundInput {
  name?: string;
}

const UIXBackground: FC<UIXBackgroundInput> = ({ name = "BG", children }) => {
  const backgroundMaterialId = generateId();
  return (
    <UIXElement
      name={name}
      components={[
        <UI_UnlitMaterial
          id={backgroundMaterialId}
          ZWrite={"On"}
          OffsetUnits={100}
          OffsetFactor={1}
        />,
        <Image Material={backgroundMaterialId} />,
      ]}
    >
      {children}
    </UIXElement>
  );
};

export default UIXBackground;
