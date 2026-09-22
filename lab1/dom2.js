import { EventEmitter} from "events";

const button = new EventEmitter();

button.on("click" ,() =>{
    console.log("Button Clicked Me! ")
});

button.on("click" ,() =>{
    console.log("Button don't Clicked Me! ")
});

// EventEmitter

button.emit("click");

