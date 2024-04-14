interface IOne {
  [key: string]: string | number;
  [key: number]: string | number;
}

interface ITwo {
  [key: string]: [func: (a: unknown) => void];
  [key: number]: [func: (a: unknown) => void];
}

interface IThree {
  [key: number]: string;
}

interface IFour {
  name: string;
  [key: string]: string;
  [key: number]: string;
}

interface IFive {
  [key: string]: string;
  [key: number]: string;
}

interface IFive {
  value: string;
  secondValue: string;
}

const obj: IOne = {
  ['blabla']: 6,
  ['blblbl']: 8,
  ['name']: 'Name',
};

const AreAllValuesNumbers = (obj: IOne): boolean => {
  return Object.values(obj).every((value: string | number): boolean => typeof value === 'number');
};
