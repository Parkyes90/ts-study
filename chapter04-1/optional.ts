interface IAgeable {
    age?: number
}

function getAge(o: IAgeable) {
    return o?.age || 0
}

console.log(getAge(undefined))
console.log(getAge(null))
console.log(getAge({age:32}))