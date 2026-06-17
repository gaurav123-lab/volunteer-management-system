const express = require("express");
const Volunteer = require("../models/Volunteer.js");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const router = express.Router();
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { phone, city, skills, availability } = req.body;
    const volunteer = await Volunteer.create({
      userId: req.user.id,
      phone,
      city,
      skills,
      availability,
    });

    res
      .status(201)
      .json({ message: "Volunteer registered successfully", volunteer });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Error registering volunteer" });
  }
});
router.get("/my-profile", authMiddleware, async (req, res) => {
  try {
    const volunteer = await Volunteer.findOne({ userId: req.user.id });
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json({ message: "Volunteer found", volunteer });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/all", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate("userId", "name email");
    res.json({ message: "All volunteers", volunteers });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});
router.put("/status/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );
    res.json({ message: "Volunteer status updated", volunteer });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});
router.get("/stats", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const total = await Volunteer.countDocuments();

    const approved = await Volunteer.countDocuments({
      status: "Approved",
    });

    const pending = await Volunteer.countDocuments({
      status: "Pending",
    });

    const rejected = await Volunteer.countDocuments({
      status: "Rejected",
    });

    res.json({
      total,
      approved,
      pending,
      rejected,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await Volunteer.findByIdAndDelete(req.params.id);

    res.json({
      message: "Volunteer Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
