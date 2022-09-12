import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MaterialAssetMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Material?: member<any>;
  VariantIndex?: member<any>;
  RawVariantIndex?: member<any>;
  VariantID?: member<any>;
  RawVariantID?: member<any>;
  WaitingForApply?: member<any>;
}

const MaterialAssetMetadata: FC<MaterialAssetMetadataInput> = (
  props: MaterialAssetMetadataInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Material,
    VariantIndex,
    RawVariantIndex,
    VariantID,
    RawVariantID,
    WaitingForApply,
  } = props;

  return (
    <component
      name="FrooxEngine.MaterialAssetMetadata"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`}
        name="Material"
        content={Material} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.UInt32]]`}
        name="VariantIndex"
        content={
          VariantIndex
        } /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.UInt32]] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.UInt32]]`}
        name="RawVariantIndex"
        content={
          RawVariantIndex
        } /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.UInt32]] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="VariantID"
        content={
          VariantID
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="RawVariantID"
        content={
          RawVariantID
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="WaitingForApply"
        content={
          WaitingForApply
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
    </component>
  );
};

export default MaterialAssetMetadata;
