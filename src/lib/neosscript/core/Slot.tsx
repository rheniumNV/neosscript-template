import React, { FC, ReactNode } from "react";
import { Member, member } from "./Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      slotData: any;
      components: any;
      children: any;
    }
  }
}

interface SlotInput {
  id?: string;
  name: member<string>;
  tag?: member<string>;
  active?: member<boolean>;
  persistentId?: string;
  position?: member<[number, number, number]>;
  rotation?: member<[number, number, number]>;
  scale?: member<[number, number, number]>;
  orderOffset?: member<number>;
  components?: JSX.Element | Array<JSX.Element>;
  assets?: Array<JSX.Element>;
  children?: ReactNode | JSX.Element | Array<JSX.Element>;
}

const Slot: FC<SlotInput> = ({
  id,
  name = "",
  tag = "",
  active = true,
  persistentId = undefined,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  orderOffset = 0,
  children = [],
  components = [],
  assets = [],
}: SlotInput) => {
  return (
    <slot>
      <slotData id={id} persistentId={persistentId}>
        <Member type="" name="Name" content={name} />
        <Member type="" name="Tag" content={tag} />
        <Member type="" name="Active" content={active} />
        <Member type="" name="Position" content={position} />
        <Member type="" name="Rotation" content={rotation} />
        <Member type="" name="Scale" content={scale} />
        <Member type="" name="OrderOffset" content={orderOffset} />
      </slotData>
      <components>{components}</components>
      <children>{children}</children>
      <assets>{assets}</assets>
    </slot>
  );
};

export default Slot;
