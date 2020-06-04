export type Nullable = undefined | null;

export interface IValuable<T> {
  getOrElse(defaultValue: T);
}

export interface IFunctor<T> {
  map<U>(fn: (value: T) => U);
}

export class Some<T> implements IValuable<T>, IFunctor<T> {
  constructor(private value: T) {}
  getOrElse(defaultValue: T) {
    return this.value ?? defaultValue;
  }
  map<U>(fn: (T) => U) {
    return new Some<U>(fn(this.value));
  }
}

export class None implements IValuable<Nullable>, IFunctor<Nullable> {
  getOrElse<T>(defaultValue: Nullable | T) {
    return defaultValue;
  }
  map<U>(fn: (T) => U) {
    return new None();
  }
}

export class Option {
  private constructor() {}
  static Some<T>(value: T) {
    return new Some<T>(value);
  }
  static None = new None();
}

const m = Option.Some(1);
const value = m.map((value) => value + 1).getOrElse(1);
console.log(value);

const parseNumber = (n: string): IFunctor<number> & IValuable<number> => {
  const value = parseInt(n);
  return isNaN(value) ? Option.None : Option.Some(value);
};
