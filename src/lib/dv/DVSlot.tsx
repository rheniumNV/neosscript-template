import React, { FC } from "react";
import Slot from "lib/neosscript/core/Slot";
import _ from "lodash";
import DynamicValueVariable_T from "lib/neosscript/core/components/Data/Dynamic/DynamicValueVariable_T";
import { NEOS_TYPE } from "lib/neosscript/core/types/NeosType";
import DynamicReferenceVariable_T from "lib/neosscript/core/components/Data/Dynamic/DynamicReferenceVariable_T";

type variable = { type: NEOS_TYPE; name: string; value?: any };

interface DVSlotInput {
  name?: string;
  valueVariables?: Array<variable>;
  referenceVariables?: Array<variable>;
  components?: Array<JSX.Element>;
}

const generateVariable =
  (Component) =>
  ({ name, type, value }) => {
    return (
      <Component
        type={{ T: type }}
        VariableName={name}
        Value={value}
        Reference={value}
      />
    );
  };

const DVSlot: FC<DVSlotInput> = ({
  name = "DV",
  valueVariables = [],
  referenceVariables = [],
  components = [],
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
        ...components,
      ]}
    >
      {children}
    </Slot>
  );
};

export default DVSlot;
