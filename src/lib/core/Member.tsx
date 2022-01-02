import React, { FC } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
      member: any;
    }
  }
}

export type id<T> = string;

export type member<T> = T | { value: T; id: id<T> };

interface MemberInput {
  type: string;
  name: string;
  content: member<any>;
}

export const Member: FC<MemberInput> = ({ type, name, content }) => {
  if (content == undefined) {
    return <></>;
  }
  const { value, id } = content;
  if (id == undefined) {
    return <member id={id} name={name} type={type} value={value} />;
  }
  return <member name={name} type={type} value={content} />;
};
