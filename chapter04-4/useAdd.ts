import { NumberToNumberFunc, addts } from './add';

let fn: NumberToNumberFunc = addts(1);

let result = fn(2);

console.log(result);
console.log(addts(1)(2))