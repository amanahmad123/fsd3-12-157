import express from "express"

const app = express();


// app.get("/", (req, res) => {
//     res.send("hey how are you sir what you wnat to doing is this all right ")
// })

// app.get("/home", (req, res) => {
//     res.send("i am home ")

// })

// app.get("/contact", (req, res)=> {
//     res.send("i am contacst page")
// })

// app.get("/product" , (req, res)=> {
//     const product = {
//         id: 1, 
//         name: "aman", 
//         price: 324423,
//     };


//     res.send(product)
// })


// app.get("/", (req , res)=> {
//     res.send("<h1> tera bhai hai na fir </h1>")
// })


// app.get("/", (req, res)=> {

//     res.send( 
//     `<h1> hey </h1>
//     <h2> how are you </h2>
//     <h3> Kaise ho bhai </h3>
    
//     `

//     )
// })


app.listen(3005, ()=> {
    console.log("server is running ")
})