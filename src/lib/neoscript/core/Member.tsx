import React, { FC } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
      member: any;
      assets: any;
      typeVersions: any;
      typeVersion: any;
    }
  }
}

export type id<T> = string;

export type member<T> = { value: T; id: id<T> } | T;

interface MemberInput {
  type?: string;
  name: string;
  content: member<any>;
  default?: any;
}

export const Member: FC<MemberInput> = ({ type, name, content }) => {
  if (content == undefined) {
    return <></>;
  }
  const { value, id } = content;
  if (id == undefined) {
    return <member name={name} type={type} value={JSON.stringify(content)} />;
  }
  return (
    <member id={id} name={name} type={type} value={JSON.stringify(value)} />
  );
};

interface TypeVersionInput {
  key: string;
  version: number;
}

export const TypeVersion: FC<TypeVersionInput> = ({ key, version }) => {
  return <typeVersion name={key} version={version} />;
};
