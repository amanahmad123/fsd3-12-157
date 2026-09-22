import { readFile, writeFile, appendFile } from "fs/promises";

const readData = async (filename) => {
    const data = await readFile(filename, "utf-8");
    return data;
};

const writeData = async (filename, content) => {
    await writeFile(filename, content);
};

const appendData = async (filename, content) => {
    await appendFile(filename, content);
};


const data = await readData("hello.txt");
console.log(data);

await writeData("hello.txt", "Hello Aman");

await appendData("hello.txt", "\nThis is appended data");

// function should be a async
// if a function       a keyword then the function msut be async