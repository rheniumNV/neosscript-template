import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface UnwrappableBoxDriverInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Unwrap?: member<number>;
  SideSize?: member<number>;
  ScaleContent?: member<boolean>;
  _side0rotation?: member<any>;
  _side1rotation?: member<any>;
  _side2rotation?: member<any>;
  _side3rotation?: member<any>;
  _topRotation?: member<any>;
  _side0offset?: member<any>;
  _side1offset?: member<any>;
  _side2offset?: member<any>;
  _side3offset?: member<any>;
  _topOffset?: member<any>;
  _side0contentOffset?: member<any>;
  _side1contentOffset?: member<any>;
  _side2contentOffset?: member<any>;
  _side3contentOffset?: member<any>;
  _topContentOffset?: member<any>;
  _side0contentScale?: member<any>;
  _side1contentScale?: member<any>;
  _side2contentScale?: member<any>;
  _side3contentScale?: member<any>;
  _bottomContentScale?: member<any>;
  _topContentScale?: member<any>;
}

const UnwrappableBoxDriver: FC<UnwrappableBoxDriverInput> = (
  props: UnwrappableBoxDriverInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Unwrap,
    SideSize,
    ScaleContent,
    _side0rotation,
    _side1rotation,
    _side2rotation,
    _side3rotation,
    _topRotation,
    _side0offset,
    _side1offset,
    _side2offset,
    _side3offset,
    _topOffset,
    _side0contentOffset,
    _side1contentOffset,
    _side2contentOffset,
    _side3contentOffset,
    _topContentOffset,
    _side0contentScale,
    _side1contentScale,
    _side2contentScale,
    _side3contentScale,
    _bottomContentScale,
    _topContentScale,
  } = props;

  return (
    <component
      name="FrooxEngine.UnwrappableBoxDriver"
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
        name="Unwrap"
        content={Unwrap} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="SideSize"
        content={SideSize} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="ScaleContent"
        content={ScaleContent} /* default: False */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_side0rotation"
        content={_side0rotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_side1rotation"
        content={_side1rotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_side2rotation"
        content={_side2rotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_side3rotation"
        content={_side3rotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`}
        name="_topRotation"
        content={_topRotation} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side0offset"
        content={_side0offset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side1offset"
        content={_side1offset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side2offset"
        content={_side2offset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side3offset"
        content={_side3offset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_topOffset"
        content={_topOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side0contentOffset"
        content={_side0contentOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side1contentOffset"
        content={_side1contentOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side2contentOffset"
        content={_side2contentOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side3contentOffset"
        content={_side3contentOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_topContentOffset"
        content={_topContentOffset} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side0contentScale"
        content={_side0contentScale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side1contentScale"
        content={_side1contentScale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side2contentScale"
        content={_side2contentScale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_side3contentScale"
        content={_side3contentScale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_bottomContentScale"
        content={_bottomContentScale} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`}
        name="_topContentScale"
        content={_topContentScale} /* default: ID0 */
      />
    </component>
  );
};

export default UnwrappableBoxDriver;
