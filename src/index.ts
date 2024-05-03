type ParamType<T> = T extends (param: string) => infer U ? U : undefined;

function func(param: string): string {
  return param;
}

let a: ParamType<typeof func>;

type ParamType1<T> = T extends (param: infer V) => infer U ? [U, V] : undefined;

function func1(param: number): string {
  return param.toString();
}

let b: ParamType1<typeof func1>;
