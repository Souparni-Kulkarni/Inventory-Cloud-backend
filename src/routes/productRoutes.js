import express from "express";

const router = express.Router();

// Temporary in-memory product list
let products = [{
        id: 1,
        name: "Laptop",
        price: 50000,
        quantity: 10,
        category: "Electronics",
    },
    {
        id: 2,
        name: "Mouse",
        price: 500,
        quantity: 50,
        category: "Accessories",
    },
];

// GET all products
router.get("/", (req, res) => {
    res.json(products);
});

// ADD new product
router.post("/", (req, res) => {
    const newProduct = {
        id: Date.now(),
        ...req.body,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// UPDATE product
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    products = products.map((p) =>
        p.id === id ? {...p, ...req.body } : p
    );
    res.json({ message: "Product updated" });
});

// DELETE product
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter((p) => p.id !== id);
    res.json({ message: "Product deleted" });
});

export default router;