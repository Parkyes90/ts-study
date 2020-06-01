export const compose = <T, R>(...functions: readonly Function[]): Function => (x:T): (T) => R => {
    const deepCopiedFunctions = [...functions]
    return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
}

export const pipe = <T, R> (...functions: readonly Function[]): Function => (x:T):
(T) => R => {
    return functions.reduce((value, func) => func(value),  x)
};