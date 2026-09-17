import {stat} from "fs/promises";

const fstat = await stat("file1.js");

console.log("file size", fstat.size, "bytes")

console.log(`is file:  ${fstat.isFile()}` );