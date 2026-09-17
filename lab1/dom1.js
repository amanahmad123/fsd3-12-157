// full form of DOM - Document Object Model.........


import {EventEmitter} from "events";
const button = new EventEmitter();

button.on("click" , () => {
    console.log("Button Clicked: ");
});
button.emit("click");