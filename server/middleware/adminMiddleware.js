const adminMiddleware = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = adminMiddleware;