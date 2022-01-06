import React, { FC } from "react";
import Slot from "lib/core/Slot";
import _ from "lodash";
import DynamicValueVariable_T from "lib/core/components/Data/Dynamic/DynamicValueVariable_T";
import { NEOS_TYPE } from "lib/core/types/NeosType";
import DynamicReferenceVariable_T from "lib/core/components/Data/Dynamic/DynamicReferenceVariable_T";

type variable = { type: NEOS_TYPE; name: string; value?: any };

interface DVSlotInput {
  name?: string;
  valueVariables?: Array<variable>;
  referenceVariables?: Array<variable>;
}

const generateVariable =
  (Component) =>
  ({ name, type, value }) => {
    return <Component type={{ T: type }} VariableName={name} Value={value} />;
  };

const DVSlot: FC<DVSlotInput> = ({
  name = "DV",
  valueVariables = [],
  referenceVariables = [],
  children,
}) => {
  return (
    <Slot
      name={name}
      components={[
        ..._.map(valueVariables, generateVariable(DynamicValueVariable_T)),
        ..._.map(
          referenceVariables,
          generateVariable(DynamicReferenceVariable_T)
        ),
      ]}
    >
      {children}
    </Slot>
  );
};

export default DVSlot;
