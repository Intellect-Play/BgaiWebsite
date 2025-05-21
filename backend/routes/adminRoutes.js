const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  console.log("Login req.body:", req.body);
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    return res.json({ success: true, token });
  }
  return res
    .status(401)
    .json({ success: false, message: "Wrong email or password" });
});

// JWT auth middleware
const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ success: false, message: "No token" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role === "admin") return next();
    return res.status(403).json({ success: false, message: "Forbidden" });
  } catch {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// Örnek korumalı route
router.get("/dashboard", adminAuth, (req, res) => {
  res.json({ message: "Admin dashboard data" });
});

module.exports = router;
