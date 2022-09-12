import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface DataPresetInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  IsActive?: member<any>;
  Entries?: member<any>;
}

const DataPreset: FC<DataPresetInput> = (props: DataPresetInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    IsActive,
    Entries,
  } = props;

  return (
    <component
      name="FrooxEngine.DataPreset"
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
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="IsActive"
        content={
          IsActive
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.SyncRelayList\`1[FrooxEngine.IDataPresetEntry]`}
        name="Entries"
        content={
          Entries
        } /* default: FrooxEngine.SyncRelayList`1[FrooxEngine.IDataPresetEntry] */
      />
    </component>
  );
};

export default DataPreset;
