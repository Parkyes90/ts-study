interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    constructor(public name:string, public age?: number) {}
}

let jack4: IPerson4 = new Person4("jack", 32)
console.log(jack4)

class Person5 implements IPerson4 {
    constructor(public name:string, public age?: number) {}

    age2: number;
    setAge2 (age2: number) {
        this.age2 = age2
    }

}


let jack5 = new Person5('jack', 32)
jack5.setAge2(20)
console.log(jack5)