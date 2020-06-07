import { IMonad } from '../interfaces';

import { _IMaybe } from './_IMaybe';

export class Nothing implements _IMaybe<null>, IMonad<null> {
  static of<T>(value: T = null): Nothing {
    return new Nothing();
  }
  isJust(): boolean {
    return false;
  }
  isNothing(): boolean {
    return true;
  }

  getOrElse<U>(defaultValue: U) {
    return defaultValue;
  }

  map<U, V>(fn: (x) => U): Nothing {
    return new Nothing();
  }

  ap<U>(b: U) {
    return new Nothing();
  }

  chain<U>(fn: (T) => U): Nothing {
    return new Nothing();
  }
}
