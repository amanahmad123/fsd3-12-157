import http from "http"
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h3>Hello Client</h3>");
    console.log("Server hit by client");
});
server.listen(444,()=>{
    console.log("Server is running...");
})

// npm init -y ye package.json banayega taki hume bar bar server ko start aur stop na karna pade
// npm-node package manager
// npm i nodemon -D