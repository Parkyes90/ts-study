export type Person = {name: string, age:number} 

const printPerson = ({name, age} : Person):void => {
    console.log(`name: ${name}, age: ${age}`)
}

console.log(printPerson({name: "Jack", age: 10}))