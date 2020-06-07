import { Identity } from '../classes/identity';

const a = 1;
const f = (a) => a * 2;
console.log(Identity.of(a).chain(f) == f(a));
