import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface LineTransformInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Point0?: member<[number, number, number]>;
  Point1?: member<[number, number, number]>;
  Point0Anchor?: member<any>;
  Point1Anchor?: member<any>;
  LinePositionType?: member<any>;
  PlanePositionType?: member<any>;
  LinePoint?: member<number>;
  OffsetPoint?: member<[number, number, number]>;
  RotationOffset?: member<any>;
  _position?: member<any>;
  _rotation?: member<any>;
  AllowRepositioning?: member<boolean>;
  RepositionOffset?: member<boolean>;
}

const LineTransform: FC<LineTransformInput> = (props: LineTransformInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Point0,
    Point1,
    Point0Anchor,
    Point1Anchor,
    LinePositionType,
    PlanePositionType,
    LinePoint,
    OffsetPoint,
    RotationOffset,
    _position,
    _rotation,
    AllowRepositioning,
    RepositionOffset,
  } = props;

  return (
    <component
      name="FrooxEngine.LineTransform"
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
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Point0"
        content={Point0} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Point1"
        content={Point1} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.TransformRelayRef`}
        name="Point0Anchor"
        content={Point0Anchor} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.TransformRelayRef`}
        name="Point1Anchor"
        content={Point1Anchor} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PositionType]`}
        name="LinePositionType"
        content={LinePositionType} /* default: Relative */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.PositionType]`}
        name="PlanePositionType"
        content={PlanePositionType} /* default: Relative */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="LinePoint"
        content={LinePoint} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="OffsetPoint"
        content={OffsetPoint} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.floatQ]`}
        name="RotationOffset"
        content={RotationOffset} /* default: [0; 0; 0; 1] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_position"
        content={_position} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_rotation"
        content={_rotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AllowRepositioning"
        content={AllowRepositioning} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="RepositionOffset"
        content={RepositionOffset} /* default: False */
      />
    </component>
  );
};

export default LineTransform;
