import * as R from 'ramda';

const numbers: number[] = R.range(1, 9 + 1);
R.tap((n) => console.log(n))(numbers);

export const dump = <T>(array: T[]): T[] =>
  R.pipe(R.tap((n) => console.log(n)))(array) as T[];

dump(numbers);
