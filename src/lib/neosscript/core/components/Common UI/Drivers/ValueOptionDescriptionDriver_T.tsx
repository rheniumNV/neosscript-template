import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ValueOptionDescriptionDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Value?: member<any>;
  ForceDeselected?: member<boolean>;
  Label?: member<string>;
  Color?: member<any>;
  Sprite?: member<any>;
  SpriteURL?: member<any>;
  SpriteTint?: member<any>;
  DefaultOption?: member<any>;
  SpriteTintBase?: member<[number, number, number, number]>;
}

const ValueOptionDescriptionDriver_T: FC<
  ValueOptionDescriptionDriver_TInput
> = (props: ValueOptionDescriptionDriver_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Value,
    ForceDeselected,
    Label,
    Color,
    Sprite,
    SpriteURL,
    SpriteTint,
    DefaultOption,
    SpriteTintBase,
  } = props;

  return (
    <component
      name={`FrooxEngine.ValueOptionDescriptionDriver\`1[${[T]}]`}
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`}
        name="Value"
        content={Value} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ForceDeselected"
        content={ForceDeselected} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.String]`}
        name="Label"
        content={Label} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.color]`}
        name="Color"
        content={Color} /* default: null */
      />
      <Member
        type={`FrooxEngine.RefDrive\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.Sprite]]`}
        name="Sprite"
        content={Sprite} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Uri]`}
        name="SpriteURL"
        content={SpriteURL} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.color]`}
        name="SpriteTint"
        content={SpriteTint} /* default: null */
      />
      <Member
        type={`FrooxEngine.ValueOptionDescriptionDriver\`1+Option[System.Boolean]`}
        name="DefaultOption"
        content={
          DefaultOption
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ValueOptionDescriptionDriver`1\+Option\[System\.Boolean],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.color]`}
        name="SpriteTintBase"
        content={SpriteTintBase} /* default: null */
      />
    </component>
  );
};

export default ValueOptionDescriptionDriver_T;
