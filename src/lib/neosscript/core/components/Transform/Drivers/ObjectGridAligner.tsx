import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface ObjectGridAlignerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AutoAddChildren?: member<boolean>;
  ItemsPerRow?: member<number>;
  CellSize?: member<[number, number]>;
  LerpSpeed?: member<number>;
  HorizontalAlignment?: member<any>;
  VerticalAlignment?: member<any>;
  RowAxis?: member<any>;
  ColumnAxis?: member<any>;
  Items?: member<any>;
}

const ObjectGridAligner: FC<ObjectGridAlignerInput> = (
  props: ObjectGridAlignerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    AutoAddChildren,
    ItemsPerRow,
    CellSize,
    LerpSpeed,
    HorizontalAlignment,
    VerticalAlignment,
    RowAxis,
    ColumnAxis,
    Items,
  } = props;

  return (
    <component
      name="FrooxEngine.ObjectGridAligner"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoAddChildren"
        content={AutoAddChildren} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="ItemsPerRow"
        content={ItemsPerRow} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="CellSize"
        content={CellSize} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LerpSpeed"
        content={LerpSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+Align]`}
        name="HorizontalAlignment"
        content={HorizontalAlignment} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+Align]`}
        name="VerticalAlignment"
        content={VerticalAlignment} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+AxisDir]`}
        name="RowAxis"
        content={RowAxis} /* default: Xpos */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+AxisDir]`}
        name="ColumnAxis"
        content={ColumnAxis} /* default: Xpos */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.ObjectGridAligner+Item]`}
        name="Items"
        content={
          Items
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.ObjectGridAligner+Item] */
      />
    </component>
  );
};

export default ObjectGridAligner;
