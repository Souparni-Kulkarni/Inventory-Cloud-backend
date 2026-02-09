import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@test.com" && password === "123456") {
        return res.json({
            token: "fake-jwt-token",
            user: { name: "Admin", role: "OWNER" },
        });
    }

    res.status(401).json({ message: "Invalid credentials" });
});

export default router;