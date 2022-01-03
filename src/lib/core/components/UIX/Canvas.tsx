import React, { FC } from "react";
import { member, Member } from "../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface CanvasInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  Size?: member<any>;
  EditModeOnly?: member<boolean>;
  AcceptRemoteTouch?: member<boolean>;
  AcceptPhysicalTouch?: member<boolean>;
  AcceptExistingTouch?: member<boolean>;
  HighPriorityIntegration?: member<boolean>;
  IgnoreTouchesFromBehind?: member<boolean>;
  BlockAllInteractions?: member<boolean>;
  LaserPassThrough?: member<boolean>;
  PixelScale?: member<number>;
  UnitScale?: member<number>;
  _rootRect?: member<any>;
  Collider?: member<any>;
  _colliderSize?: member<any>;
  _colliderOffset?: member<any>;
  StartingOffset?: member<number>;
  StartingMaskDepth?: member<number>;
}

const Canvas: FC<CanvasInput> = (props: CanvasInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    Size,
    EditModeOnly,
    AcceptRemoteTouch,
    AcceptPhysicalTouch,
    AcceptExistingTouch,
    HighPriorityIntegration,
    IgnoreTouchesFromBehind,
    BlockAllInteractions,
    LaserPassThrough,
    PixelScale,
    UnitScale,
    _rootRect,
    Collider,
    _colliderSize,
    _colliderOffset,
    StartingOffset,
    StartingMaskDepth,
  } = props;

  return (
    <component
      name="FrooxEngine.UIX.Canvas"
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
      <Member
        type="FrooxEngine.Sync`1[BaseX.float2]"
        name="Size"
        content={Size}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="EditModeOnly"
        content={EditModeOnly}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AcceptRemoteTouch"
        content={AcceptRemoteTouch}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AcceptPhysicalTouch"
        content={AcceptPhysicalTouch}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="AcceptExistingTouch"
        content={AcceptExistingTouch}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="HighPriorityIntegration"
        content={HighPriorityIntegration}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="IgnoreTouchesFromBehind"
        content={IgnoreTouchesFromBehind}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="BlockAllInteractions"
        content={BlockAllInteractions}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="LaserPassThrough"
        content={LaserPassThrough}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="PixelScale"
        content={PixelScale}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Single]"
        name="UnitScale"
        content={UnitScale}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.RectTransform]"
        name="_rootRect"
        content={_rootRect}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.BoxCollider]"
        name="Collider"
        content={Collider}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float3]"
        name="_colliderSize"
        content={_colliderSize}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[BaseX.float3]"
        name="_colliderOffset"
        content={_colliderOffset}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="StartingOffset"
        content={StartingOffset}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="StartingMaskDepth"
        content={StartingMaskDepth}
      />
    </component>
  );
};

export default Canvas;
