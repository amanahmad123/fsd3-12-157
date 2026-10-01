import express from "express"

const app = express();


app.get("/", (req, res) => {
    res.send("hey how are you sir what you wnat to doing is this all right ")
})

app.get("/home", (req, res) => {
    res.send("i am home ")

})

app.get("/contact", (req, res)=> {
    res.send("i am contacst page")
})



app.listen(3005, ()=> {
    console.log("server is running ")
})