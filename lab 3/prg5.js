import http from "http"
const server=http.createServer((req,res)=>{
if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
}

else if (req.url === "/product") {
    res.end(`
        <h1>Iphone XL</h1>
        <h2>Price: 90000</h2>
        <h3>Discount: 30%</h3>
    `);
}

else if (req.url === "/contact") {
    res.end("<h1>Contact Us</h1>");
}

else {
    res.statusCode = 404;

    res.end(`
        <h1>Page Not Found</h1>
        <a href="/">HOME</a>
    `);
}
 
});
server.listen(3000,()=>{
    console.log("Server is running...");
})