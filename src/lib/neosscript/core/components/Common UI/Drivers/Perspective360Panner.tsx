import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface Perspective360PannerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  IdleFOV?: member<number>;
  HoverFOV?: member<number>;
  FOVSpeed?: member<number>;
  HorizontalPanningAcceleration?: member<number>;
  HorizontalPanningSpeed?: member<number>;
  VerticalPanningSpeed?: member<number>;
  VerticalRange?: member<number>;
  AngleOffset?: member<[number, number]>;
  FOV?: member<[number, number]>;
}

const Perspective360Panner: FC<Perspective360PannerInput> = (
  props: Perspective360PannerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    IdleFOV,
    HoverFOV,
    FOVSpeed,
    HorizontalPanningAcceleration,
    HorizontalPanningSpeed,
    VerticalPanningSpeed,
    VerticalRange,
    AngleOffset,
    FOV,
  } = props;

  return (
    <component
      name="FrooxEngine.Perspective360Panner"
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
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="IdleFOV"
        content={IdleFOV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HoverFOV"
        content={HoverFOV} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="FOVSpeed"
        content={FOVSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HorizontalPanningAcceleration"
        content={HorizontalPanningAcceleration} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HorizontalPanningSpeed"
        content={HorizontalPanningSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="VerticalPanningSpeed"
        content={VerticalPanningSpeed} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="VerticalRange"
        content={VerticalRange} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="AngleOffset"
        content={AngleOffset} /* default: [0; 0] */
      />
      <Member
        type={`FrooxEngine.Sync\`1[BaseX.float2]`}
        name="FOV"
        content={FOV} /* default: [0; 0] */
      />
    </component>
  );
};

export default Perspective360Panner;
