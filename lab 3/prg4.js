import http from "http";;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    const product = {
        name: "Iphone",
        price: 85000,
        qty: 2,
        discount: 15
    };

    const product2 = {
        name: "Samsung",
        price: 70000,
        qty: 3,
        discount: 10
    };

    const products = [product, product2];

    res.end(JSON.stringify(products));
});

server.listen(3000, () => {
    console.log("Server is running at 3000...");
});