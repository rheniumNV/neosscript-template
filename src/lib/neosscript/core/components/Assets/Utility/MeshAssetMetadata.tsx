import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface MeshAssetMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Mesh?: member<any>;
  VertexCount?: member<any>;
  TriangleCount?: member<any>;
  PointCount?: member<any>;
  SubmeshCount?: member<any>;
  BoneCount?: member<any>;
  BlendshapeCount?: member<any>;
  HasNormals?: member<any>;
  HasTangents?: member<any>;
  HasVertexColors?: member<any>;
  HasUV0s?: member<any>;
  HasUV1s?: member<any>;
  HasUV2s?: member<any>;
  HasUV3s?: member<any>;
}

const MeshAssetMetadata: FC<MeshAssetMetadataInput> = (
  props: MeshAssetMetadataInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Mesh,
    VertexCount,
    TriangleCount,
    PointCount,
    SubmeshCount,
    BoneCount,
    BlendshapeCount,
    HasNormals,
    HasTangents,
    HasVertexColors,
    HasUV0s,
    HasUV1s,
    HasUV2s,
    HasUV3s,
  } = props;

  return (
    <component
      name="FrooxEngine.MeshAssetMetadata"
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
        type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`}
        name="Mesh"
        content={Mesh} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="VertexCount"
        content={
          VertexCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="TriangleCount"
        content={
          TriangleCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="PointCount"
        content={
          PointCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="SubmeshCount"
        content={
          SubmeshCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="BoneCount"
        content={BoneCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="BlendshapeCount"
        content={
          BlendshapeCount
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasNormals"
        content={
          HasNormals
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasTangents"
        content={
          HasTangents
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasVertexColors"
        content={
          HasVertexColors
        } /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasUV0s"
        content={HasUV0s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasUV1s"
        content={HasUV1s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasUV2s"
        content={HasUV2s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Boolean]`}
        name="HasUV3s"
        content={HasUV3s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */
      />
    </component>
  );
};

export default MeshAssetMetadata;
