import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface PhotoMetadataInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  LocationName?: member<any>;
  LocationURL?: member<any>;
  LocationHost?: member<any>;
  LocationAccessLevel?: member<any>;
  LocationHiddenFromListing?: member<any>;
  TimeTaken?: member<any>;
  TakenBy?: member<any>;
  NeosVersion?: member<any>;
  PresentUsers?: member<any>;
  CameraManufacturer?: member<any>;
  CameraModel?: member<any>;
  CameraFOV?: member<number>;
  Is360?: member<boolean>;
  StereoLayout?: member<any>;
}

const PhotoMetadata: FC<PhotoMetadataInput> = (props: PhotoMetadataInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    LocationName,
    LocationURL,
    LocationHost,
    LocationAccessLevel,
    LocationHiddenFromListing,
    TimeTaken,
    TakenBy,
    NeosVersion,
    PresentUsers,
    CameraManufacturer,
    CameraModel,
    CameraFOV,
    Is360,
    StereoLayout,
  } = props;

  return (
    <component
      name="FrooxEngine.PhotoMetadata"
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
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="LocationName"
        content={LocationName} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Uri]`}
        name="LocationURL"
        content={LocationURL} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.UserRef`}
        name="LocationHost"
        content={
          LocationHost
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[CloudX.Shared.SessionAccessLevel]]`}
        name="LocationAccessLevel"
        content={LocationAccessLevel} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`}
        name="LocationHiddenFromListing"
        content={LocationHiddenFromListing} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.DateTime]`}
        name="TimeTaken"
        content={TimeTaken} /* default: 0001/01/01 0:00:00 */
      />
      <Member
        type={`FrooxEngine.UserRef`}
        name="TakenBy"
        content={
          TakenBy
        } /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ False,\ Name:\ \r\n */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="NeosVersion"
        content={NeosVersion} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`}
        name="PresentUsers"
        content={
          PresentUsers
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="CameraManufacturer"
        content={CameraManufacturer} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.String]`}
        name="CameraModel"
        content={CameraModel} /* default: <i>null</i> */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="CameraFOV"
        content={CameraFOV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Is360"
        content={Is360} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.StereoLayout]`}
        name="StereoLayout"
        content={StereoLayout} /* default: None */
      />
    </component>
  );
};

export default PhotoMetadata;
