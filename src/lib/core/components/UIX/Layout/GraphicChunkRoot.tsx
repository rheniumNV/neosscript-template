import React, { FC } from "react";
import { member, Member } from "../../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GraphicChunkRootInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
}

const GraphicChunkRoot: FC<GraphicChunkRootInput> = (
  props: GraphicChunkRootInput
) => {
  const { id, persistentId, UpdateOrder, Enabled } = props;

  return (
    <component
      name="FrooxEngine.UIX.GraphicChunkRoot"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
    </component>
  );
};

export default GraphicChunkRoot;
