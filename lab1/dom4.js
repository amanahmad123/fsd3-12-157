import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("submit", (uname, password) => {
    console.log(`form submitte`);
    console.log(`user name: ${uname}`);
    console.log(`user password: ${password}`)
});

form.emit("submit", "Aman", "11223322");