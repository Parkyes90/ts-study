export const compose = <T, R>(...functions: readonly Function[]): Function => (x:T): (T) => R => {
    const deepCopiedFunctions = [...functions]
    return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
}

export const pipe = <T, R> (...functions: readonly Function[]): Function => (x:T):
(T) => R => {
    return functions.reduce((value, func) => func(value),  x)
};

export const map = f => a => a.map(f)
export const reduce = <T>(f: (sum:T, value:T) => T, initValue: T) => (a: T[]): T => a.reduce(f, initValue);