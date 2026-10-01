import express from "express";

const app = express();

app.use(express.json());



let products = [
    {
        id: 101,
        name: "Laptop",
        price: 50000
    },
    {
        id: 102,
        name: "Phone",
        price: 25000
    }
];



app.get("/api/products", (req, res) => {
    res.json(products);
});



app.get("/api/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});


app.post("/api/products", (req, res) => {

    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product created",
        product: newProduct
    });
});



app.put("/api/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json({
        message: "Product updated",
        product: product
    });
});


app.patch("/api/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    if (req.body.name !== undefined) {
        product.name = req.body.name;
    }

    if (req.body.price !== undefined) {
        product.price = req.body.price;
    }

    res.json({
        message: "Product partially updated",
        product: product
    });
});



app.delete("/api/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const productIndex = products.findIndex(product => product.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    res.json({
        message: "Product deleted",
        product: deletedProduct[0]
    });
});


app.listen(3003, () => {
    console.log("Server running on port 3004");
});