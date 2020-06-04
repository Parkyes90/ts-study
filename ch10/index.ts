export interface IValuable<T> {
  value: T;
}

export class Valuable<T> implements IValuable<T> {
  constructor(public value: T) {}
}

export const printValue = <T>(o: IValuable<T>): void => console.log(o.value);

printValue(new Valuable(1));
printValue(new Valuable<boolean>(true));
printValue(new Valuable<string>('hello'));
printValue(
  new Valuable<number[]>([1, 2, 3]),
);
export const printValueT = <Q, T extends IValuable<Q>>(o: T) =>
  console.log(o.value);
printValueT(new Valuable(1));
export const create = <T>(type: { new (...args): T }, ...args): T =>
  new type(...args);
class Point {
  constructor(public x: number, public y: number) {}
}
[create(Date), create(Point, 0, 0)].forEach((s) => console.log(s));
export const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys
    .map((key) => ({ [key]: obj[key] }))
    .reduce((result, value) => ({ ...result, ...value }), {});

const obj = { name: 'Jane', age: 22, city: 'Seoul', country: 'Korea' };
console.log(pick(obj, ['name', 'age']));
