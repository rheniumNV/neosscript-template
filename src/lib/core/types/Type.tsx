import React from "react";

export type typeInterface<T> = {
  value: T;
  id: string;
};
export class Base {
  public value: any;
  public static typeName: string;
  constructor(value: any) {
    this.value = value;
  }
}

export type BooleanType = boolean;
export class Boolean extends Base {
  public value: BooleanType;
  public static typeName = "System.Boolean";
  constructor(value: BooleanType) {
    super(value);
  }
}

export type FiledId<T> = { id: string };

export class Field<T extends Base> {
  public id: string;
  public value: T;
  constructor(value: T, id: string) {
    this.value = value;
    this.id = id;
  }
}

export type MemberInterface<T> = T | typeInterface<T>;

const ValueCopy = (cla) => (props: {}) => {
  return cla.typeName;
};

console.log(ValueCopy(Boolean)({}));
