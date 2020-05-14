export class A {
    constructor(name: string) {
        console.log("created")

    }
    value: number = 1
    method: () => void = function(): void {
        console.log(`value ${this.value}`)
    }
    test = () => {
        console.log(this.value)
    }
}