import React, { FC } from "react";
import { member, Member } from "../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
interface ObjectRootInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
}

const ObjectRoot: FC<ObjectRootInput> = (props: ObjectRootInput) => {
  const { id, persistentId, UpdateOrder, Enabled } = props;

  return (
    <component
      name="FrooxEngine.ObjectRoot"
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
    </component>
  );
};

export default ObjectRoot;