export class StringIterable implements Iterable<string> {
  constructor(
    private strings: string[] = [],
    private currentIndex: number = 0
  ) {}

  [Symbol.iterator](): Iterator<string> {
    let currentIndex = this.currentIndex;
    let length = this.strings.length;

    return {
      next: (): { value: string; done: boolean } => {
        const value =
          this.currentIndex < length ? this.strings[currentIndex++] : undefined;
        const done = value === undefined;
        return { value: value === undefined ? "" : value, done };
      },
    };
  }
}
