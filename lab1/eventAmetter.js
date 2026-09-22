import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`Logged in ${name}`);
};

const start = () => {
  console.log("Starting...");
};

const working = (name) => {
  console.log(`${name} add items  to cart`);
};

const checkout = (name) => {
  console.log(`Checkout ${name}`);
};
start();

login("Aman Ahamad");
working("chair");

checkout("Aman Ahamad");

const exit = (name) => {
  console.log(`system Shutdown ${name}`);
};


const task = new EventEmitter();

task.on("greeting", login);
task.on("working", working);
task.on("checkout", checkout);
// task.once("blast", () => {


task.emit("greeting", "Mayank Bansal");
task.emit("working", "Table");
task.emit("greet", "Working");
task.off("checkout", checkout);
task.emit("checkout", "chausariya");
task.emit("exit", "Shutdown");

