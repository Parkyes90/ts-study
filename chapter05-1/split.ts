export const split = (str: string, delim: string = ''): string[] => str.split(delim)
console.log(split("hello"))
export const join = (strArray: string[], delim: string=""): string => strArray.join(delim);