const jwt = require("jsonwebtoken");

const isAuthenticates = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("Cookies:", req.cookies);
    console.log("Token:", req.cookies.token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No Token",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // ✅ SUPPORT ALL POSSIBLE TOKEN SHAPES
    // const userId = decoded.userId || decoded.id || decoded._id;
    if (!decoded) {
      return res.status(400).json({ success: false, message: "Invalid Token" });
    }

    // if all complete check id

    req.id = decoded.userId; // Old methods
    req.role = decoded.role; // important based on user role
    req.user = { _id: decoded.userId }; //New Methods
    // console.log("Decoded token:", decoded);
    // console.log("req.id:", req.id, "req.role:", req.role);

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Authentication Failed",
    });
  }
};

module.exports = isAuthenticates;
