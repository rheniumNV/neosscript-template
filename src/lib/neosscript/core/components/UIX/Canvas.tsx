import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

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
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Size?: member<[number, number]>;
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
    updateOrderId,
    updateOrder,
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
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
      version={1}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="Size"
        content={Size} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="EditModeOnly"
        content={EditModeOnly} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AcceptRemoteTouch"
        content={AcceptRemoteTouch} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AcceptPhysicalTouch"
        content={AcceptPhysicalTouch} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AcceptExistingTouch"
        content={AcceptExistingTouch} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="HighPriorityIntegration"
        content={HighPriorityIntegration} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="IgnoreTouchesFromBehind"
        content={IgnoreTouchesFromBehind} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="BlockAllInteractions"
        content={BlockAllInteractions} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="LaserPassThrough"
        content={LaserPassThrough} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="PixelScale"
        content={PixelScale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="UnitScale"
        content={UnitScale} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`}
        name="_rootRect"
        content={_rootRect} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.BoxCollider]`}
        name="Collider"
        content={Collider} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_colliderSize"
        content={_colliderSize} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_colliderOffset"
        content={_colliderOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="StartingOffset"
        content={StartingOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Int32]`}
        name="StartingMaskDepth"
        content={StartingMaskDepth} /* default: 0 */
      />
    </component>
  );
};

export default Canvas;
