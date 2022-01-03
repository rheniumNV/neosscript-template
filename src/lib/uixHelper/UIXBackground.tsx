import React, { FC } from "react";
import Image from "lib/core/components/UIX/Graphics/Image";
import UI_UnlitMaterial from "lib/core/components/Assets/Materials/UI/UI_UnlitMaterial";
import UIXElement from "lib/uixHelper/UIXElement";
import { generateId } from "lib/core/util";
import SpriteProvider from "lib/core/components/Assets/SpriteProvider";
import StaticTexture2D from "lib/core/components/Assets/StaticTexture2D";

interface UIXBackgroundInput {
  name?: string;
}

const UIXBackground: FC<UIXBackgroundInput> = ({ name = "BG", children }) => {
  const backgroundMaterialId = generateId();
  const spriteProviderId = generateId();
  const textureId = generateId();
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
        <Image Material={backgroundMaterialId} Sprite={spriteProviderId} />,
        <SpriteProvider
          id={spriteProviderId}
          Texture={textureId}
          Scale={0.05}
          Borders={[0.333, 0.333, 0.333, 0.333]}
        />,
        <StaticTexture2D
          id={textureId}
          URL="@neosdb:///d8495d0372ef5bb0f9eec8ad864ebf7bf7f699e713176821e6ed0f7826b78091.png"
        />,
      ]}
    >
      {children}
    </UIXElement>
  );
};

export default UIXBackground;
