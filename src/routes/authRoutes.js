import express from "express";
const router = express.Router();

let products = [];

router.get("/", (req, res) => {
    res.json(products);
});

router.post("/", (req, res) => {
    const product = { id: Date.now(), ...req.body };
    products.push(product);
    res.json(product);
});

router.put("/:id", (req, res) => {
    products = products.map((p) =>
        p.id == req.params.id ? {...p, ...req.body } : p
    );
    res.json({ message: "Updated" });
});

router.delete("/:id", (req, res) => {
    products = products.filter((p) => p.id != req.params.id);
    res.json({ message: "Deleted" });
});

export default router;