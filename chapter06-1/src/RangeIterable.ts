export class RangeIterable {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    let currentValue = this.from;
    return {
      next: () => {
        const value = currentValue < this.to ? currentValue++ : undefined;
        const done = value === undefined;
        return { value, done };
      },
    };
  }
}
