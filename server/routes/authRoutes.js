const express = require("express");
const bycrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User.js");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
// Register Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const passwordHash = await bycrpyt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: passwordHash,
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const ismatch = await bycrpyt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});
router.get("/profile", authMiddleware, async (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});
module.exports = router;
