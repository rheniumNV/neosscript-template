import React, { FC } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      components: any;
      children: any;
    }
  }
}

interface SlotInput {
  name: string;
  tag?: string;
  components?: JSX.Element | Array<JSX.Element>;
  children?: JSX.Element | Array<JSX.Element>;
}

const Slot: FC<SlotInput> = ({
  name,
  tag = "",
  children,
  components,
}: SlotInput) => {
  return (
    <slot {...{ name, tag }}>
      <components>{components}</components>
      <children>{children}</children>
    </slot>
  );
};

export default Slot;
