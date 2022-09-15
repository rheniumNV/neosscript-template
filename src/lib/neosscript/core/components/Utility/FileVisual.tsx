import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface FileVisualInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  MetadataSource?: member<any>;
  TypeLabel?: member<any>;
  NameLabel?: member<any>;
  FillMaterial?: member<any>;
  OutlineMaterial?: member<any>;
  TypeMaterial?: member<any>;
}

const FileVisual: FC<FileVisualInput> = (props: FileVisualInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    MetadataSource,
    TypeLabel,
    NameLabel,
    FillMaterial,
    OutlineMaterial,
    TypeMaterial,
  } = props;

  return (
    <component
      name="FrooxEngine.FileVisual"
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
        type={`FrooxEngine.RelayRef\`1[FrooxEngine.FileMetadata]`}
        name="MetadataSource"
        content={MetadataSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`}
        name="TypeLabel"
        content={TypeLabel} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`}
        name="NameLabel"
        content={NameLabel} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_DualSidedMetallic]`}
        name="FillMaterial"
        content={FillMaterial} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_DualSidedMetallic]`}
        name="OutlineMaterial"
        content={OutlineMaterial} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_DualSidedMetallic]`}
        name="TypeMaterial"
        content={TypeMaterial} /* default: ID0 */
      />
    </component>
  );
};

export default FileVisual;
