import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AxisPannerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  TimeBase?: member<any>;
  Speed?: member<number>;
  Range?: member<number>;
  Offset?: member<[number, number, number]>;
  Axis?: member<[number, number, number]>;
  ReferenceScale?: member<[number, number, number]>;
  FullScaleRangeRatio?: member<number>;
  _position?: member<any>;
  _scale?: member<any>;
}

const AxisPanner: FC<AxisPannerInput> = (props: AxisPannerInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    TimeBase,
    Speed,
    Range,
    Offset,
    Axis,
    ReferenceScale,
    FullScaleRangeRatio,
    _position,
    _scale,
  } = props;

  return (
    <component
      name="FrooxEngine.AxisPanner"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IValue\`1[System.Double]]`}
        name="TimeBase"
        content={TimeBase} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Speed"
        content={Speed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Range"
        content={Range} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Offset"
        content={Offset} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="Axis"
        content={Axis} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float3]`}
        name="ReferenceScale"
        content={ReferenceScale} /* default: [0; 0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FullScaleRangeRatio"
        content={FullScaleRangeRatio} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_position"
        content={_position} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_scale"
        content={_scale} /* default: ID0 */
      />
    </component>
  );
};

export default AxisPanner;
