import express from "express";

const app = express();

app.get("/", (req , res) => {
    res.send("Hellow")
});

app.get("/home", (req , res) => {
    res.json([
        {
            id: 1,
            name: "aman"
        },

        {
            id: 2, 
            name: "Rahul"
        }
    ]);
});

app.get("/homeId/:id", (req, res) => {
    const id = req.params.id;

    res.json([
        {
            user: "user found",
            homeId: id
        }
    ]);
});

app.listen(3001, () => {
    console.log("Server is running....");
});