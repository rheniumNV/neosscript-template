import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AxisAlignerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  AutoAddChildren?: member<boolean>;
  Direction?: member<any>;
  GlobalAxisXAlign?: member<any>;
  GlobalAxisYAlign?: member<any>;
  GlobalAxisZAlign?: member<any>;
  ElementAxisXAlign?: member<any>;
  ElementAxisYAlign?: member<any>;
  ElementAxisZAlign?: member<any>;
  Separation?: member<number>;
  ExcludeList?: member<any>;
  _targets?: member<any>;
}

const AxisAligner: FC<AxisAlignerInput> = (props: AxisAlignerInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    AutoAddChildren,
    Direction,
    GlobalAxisXAlign,
    GlobalAxisYAlign,
    GlobalAxisZAlign,
    ElementAxisXAlign,
    ElementAxisYAlign,
    ElementAxisZAlign,
    Separation,
    ExcludeList,
    _targets,
  } = props;

  return (
    <component
      name="FrooxEngine.AxisAligner"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="AutoAddChildren"
        content={AutoAddChildren} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+AxisDir]`}
        name="Direction"
        content={Direction} /* default: Xpos */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`}
        name="GlobalAxisXAlign"
        content={GlobalAxisXAlign} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`}
        name="GlobalAxisYAlign"
        content={GlobalAxisYAlign} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`}
        name="GlobalAxisZAlign"
        content={GlobalAxisZAlign} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`}
        name="ElementAxisXAlign"
        content={ElementAxisXAlign} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`}
        name="ElementAxisYAlign"
        content={ElementAxisYAlign} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`}
        name="ElementAxisZAlign"
        content={ElementAxisZAlign} /* default: Neg */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Separation"
        content={Separation} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IBounded]`}
        name="ExcludeList"
        content={
          ExcludeList
        } /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IBounded] */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.AxisAligner+Target]`}
        name="_targets"
        content={
          _targets
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.AxisAligner+Target] */
      />
    </component>
  );
};

export default AxisAligner;
