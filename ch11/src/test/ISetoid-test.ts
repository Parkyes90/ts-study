import { Identity } from '../classes/identity';

const one = new Identity(1);
const antherOne = new Identity(1);
const two = new Identity(2);

console.log(
  one.equals(antherOne),
  one.equals(two),
  one.equals(1),
  one.equals(null),
  one.equals([1]),
);
