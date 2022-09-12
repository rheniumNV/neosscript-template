import React from "react";
import { generateId } from "lib/neosscript/util";
import StaticTexture2D from "lib/neosscript/core/components/Assets/StaticTexture2D";
import SpriteProvider, {
  SpriteProviderInput,
} from "lib/neosscript/core/components/Assets/SpriteProvider";

export const CommonTexture = {
  Circle:
    "@neosdb:///d8495d0372ef5bb0f9eec8ad864ebf7bf7f699e713176821e6ed0f7826b78091.png",
};

interface useSpriteInput {
  texture: string;
  sprite?: SpriteProviderInput;
}

interface useSpriteOutput {
  spriteId?: string;
  textureId: string;
  assets: Array<JSX.Element>;
}

export function useTexture({
  texture,
  sprite = {},
}: useSpriteInput): useSpriteOutput {
  const textureId = generateId();
  const spriteId = generateId();
  return {
    textureId,
    ...(sprite ? { spriteId } : {}),
    assets: [
      <StaticTexture2D id={textureId} URL={texture} />,
      ...(sprite
        ? [<SpriteProvider {...sprite} id={spriteId} Texture={textureId} />]
        : []),
    ],
  };
}
