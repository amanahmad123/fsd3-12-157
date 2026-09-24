import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/home", (req, res) => {
    res.send("Hey baby");
});

app.get("/contact", (req, res ) => {
    res.send("kya hall bhai kai kya karha hia aja gahar par maze karte hai jo bhi hoga ddekha jayaega ")
});

app.listen(3003, () => {
    console.log("Server running on port 3000");
});