import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PagingControlInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  ItemsPerPage?: member<number>;
  TotalItems?: member<number>;
  HasMoreItems?: member<boolean>;
  SkipItems?: member<number>;
  NoItemsLabel?: member<any>;
  PagingInfoLabel?: member<any>;
  TotalPages?: member<any>;
  RemainingItems?: member<any>;
  _label?: member<string>;
  _previousEnabled?: member<any>;
  _nextEnabled?: member<any>;
}

const PagingControl: FC<PagingControlInput> = (props: PagingControlInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    ItemsPerPage,
    TotalItems,
    HasMoreItems,
    SkipItems,
    NoItemsLabel,
    PagingInfoLabel,
    TotalPages,
    RemainingItems,
    _label,
    _previousEnabled,
    _nextEnabled,
  } = props;

  return (
    <component
      name="FrooxEngine.PagingControl"
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
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="ItemsPerPage"
        content={ItemsPerPage} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="TotalItems"
        content={TotalItems} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HasMoreItems"
        content={HasMoreItems} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="SkipItems"
        content={SkipItems} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="NoItemsLabel"
        content={NoItemsLabel} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="PagingInfoLabel"
        content={PagingInfoLabel} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="TotalPages"
        content={
          TotalPages
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="RemainingItems"
        content={
          RemainingItems
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.String]`}
        name="_label"
        content={_label} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="_previousEnabled"
        content={_previousEnabled} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[System.Boolean]`}
        name="_nextEnabled"
        content={_nextEnabled} /* default: ID0 */
      />
    </component>
  );
};

export default PagingControl;
