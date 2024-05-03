//task 1
type DeepReadOnly<T> = {
  readonly [K in keyof T]: DeepReadOnly<T[K]>;
};

//task 2
type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

interface IProps {
  a?: number;
  b?: {
    c?: string;
    d?: string;
  };
}

const obj: DeepRequireReadonly<IProps> = {
  a: 42,
  b: {
    c: 'sd',
    d: 'ww',
  },
};

//obj.b.c = 'Hello';

//task 3
type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string>]: T[K];
};

const foo: UpperCaseKeys<IProps> = {
  A: 3,
  //b: 1,
};

//task 4
const object = {
  property1: 42,
};

type ObjectToPropertyDescriptor<T> = { [K in keyof T]: TypedPropertyDescriptor<number> } & {
  [p: string]: PropertyDescriptor;
};

const descriptors: ObjectToPropertyDescriptor<object> = Object.getOwnPropertyDescriptors(object);

descriptors['property1']?.writable;
descriptors['property1']?.value;
