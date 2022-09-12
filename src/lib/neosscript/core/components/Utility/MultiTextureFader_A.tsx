import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MultiTextureFader_AInput {
  type: { A: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  FirstTexture?: member<any>;
  SecondTexture?: member<any>;
  Lerp?: member<any>;
  Position?: member<number>;
}

const MultiTextureFader_A: FC<MultiTextureFader_AInput> = (
  props: MultiTextureFader_AInput
) => {
  const {
    type: {
      A: { name: A },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    FirstTexture,
    SecondTexture,
    Lerp,
    Position,
  } = props;

  return (
    <component
      name={`FrooxEngine.MultiTextureFader\`1[${[A]}]`}
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
        type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[A]]`}
        name="FirstTexture"
        content={FirstTexture} /* default: null */
      />
      <Member
        type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[A]]`}
        name="SecondTexture"
        content={SecondTexture} /* default: null */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Single]`}
        name="Lerp"
        content={Lerp} /* default: null */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Position"
        content={Position} /* default: null */
      />
    </component>
  );
};

export default MultiTextureFader_A;
