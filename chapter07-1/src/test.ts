import { readFileSync, readFile } from "fs";
import ErrnoException = NodeJS.ErrnoException;

console.log("read package.json using synchronous api...");
const buffer: Buffer = readFileSync("../package.json");
console.log(buffer.toString());

readFile("../package.json", (error: ErrnoException | null, buffer: Buffer) => {
  console.log("read package.json using asynchronous api...");
  console.log(buffer.toString());
});
