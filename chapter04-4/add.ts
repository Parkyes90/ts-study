export type NumberToNumberFunc = (number) => number;
export const addts = (a: number): NumberToNumberFunc => {
    const _add: NumberToNumberFunc = (b: number): number => {
        return a + b;
    }
    return _add
}

console.log(addts(1)(2))