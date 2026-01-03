const jwt = require("jsonwebtoken");

const isAuthenticates = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("token is", token);

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "User Does Not Authenticated" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // ✅ SUPPORT ALL POSSIBLE TOKEN SHAPES
    const userId = decoded.userId || decoded.id || decoded._id;
    if (!decoded) {
      return res.status(400).json({ success: false, message: "Invalid Token" });
    }

    // if all complete check id

    req.id = decoded.userId; // Old methods
    req.user = { _id: decoded.userId }; //New Methods
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = isAuthenticates;
