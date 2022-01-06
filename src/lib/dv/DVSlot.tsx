import React, { FC } from "react";
import Slot from "lib/core/Slot";
import _ from "lodash";
import DynamicValueVariable_T from "lib/core/components/Data/Dynamic/DynamicValueVariable_T";

type variable = { type: string; name: string; value?: string };

interface DVSlotInput {
  name?: string;
  valueVariables?: Array<variable>;
  referenceVariables?: Array<variable>;
}

const DVSlot: FC<DVSlotInput> = ({
  name = "DV",
  valueVariables = [],
  children,
}) => {
  return (
    <Slot
      name={name}
      components={[
        ..._.map(valueVariables, ({ name, type, value }) => (
          <DynamicValueVariable_T
            type={{ T: type }}
            VariableName={name}
            Value={value}
          />
        )),
      ]}
    >
      {children}
    </Slot>
  );
};

export default DVSlot;
