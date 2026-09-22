import { EventEmitter} from "events";

const button = new EventEmitter();

button.on("click" ,(uname) =>{
    console.log(`Button Clicked Me!  ${uname}`)
})




button.emit("click" , "raju");
button.emit("click" , "kaju/");
button.emit("click" , "rani");
button.emit("click");


