import React, { FC } from "react";
import { member, Member } from "../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}

interface GrabbableInput {
  enable?: member<boolean>;
  scalable?: member<boolean>;
}

const Grabbable: FC<GrabbableInput> = (props: GrabbableInput) => {
  const { enable, scalable } = props;

  return (
    <component name="grabbable">
      <Member type="boolean" name="enable" content={enable} />
      <Member type="boolean" name="scalable" content={scalable} />
    </component>
  );
};

export default Grabbable;
