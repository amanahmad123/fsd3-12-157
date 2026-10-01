import express from "express"

const app = express();


app.get("/", (req, res) => {
    res.send("hey how are you sir what you wnat to doing is this all right ")
})



app.listen(3005, ()=> {
    console.log("server is running ")
})