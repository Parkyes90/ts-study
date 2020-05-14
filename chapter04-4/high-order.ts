const add5 = (a:number): (number) => number => (b:number): number => a + b;
const result5 = add5(1)(2);

console.log(result5)