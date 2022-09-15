import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ReferenceOptionDescriptionDriver_TInput {
  type: { T: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Reference?: member<any>;
  ForceDeselected?: member<boolean>;
  Label?: member<string>;
  Color?: member<any>;
  Sprite?: member<any>;
  DefaultOption?: member<any>;
}

const ReferenceOptionDescriptionDriver_T: FC<
  ReferenceOptionDescriptionDriver_TInput
> = (props: ReferenceOptionDescriptionDriver_TInput) => {
  const {
    type: {
      T: { name: T },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Reference,
    ForceDeselected,
    Label,
    Color,
    Sprite,
    DefaultOption,
  } = props;

  return (
    <component
      name={`FrooxEngine.ReferenceOptionDescriptionDriver\`1[${[T]}]`}
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`}
        name="Reference"
        content={Reference} /* default: null */
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
        type={`FrooxEngine.ReferenceOptionDescriptionDriver\`1+Option[FrooxEngine.Grabbable]`}
        name="DefaultOption"
        content={
          DefaultOption
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ReferenceOptionDescriptionDriver`1\+Option\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
    </component>
  );
};

export default ReferenceOptionDescriptionDriver_T;
